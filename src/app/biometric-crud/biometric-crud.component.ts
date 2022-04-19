import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BluetoothService } from '@nebulae/angular-ble';
import { ThfModalComponent, ThfDialogService, ThfTagOrientation } from '@totvs/thf-ui';
import * as Fingerprint2 from 'fingerprintjs2';
import { BiometricCrudService } from './biometric-crud.service';
import SignaturePad from 'signature_pad'

// import Sblendid from "@sblendid/sblendid";


@Component({
  selector: 'app-biometric-crud',
  templateUrl: './biometric-crud.component.html',
  styleUrls: ['./biometric-crud.component.css']
})
export class BiometricCrudComponent implements OnInit {

  empresa: string;
  estabel: string;
  funcionario: string;
  cdn_funcionario: number;
  can_submit: boolean = false;
  deviceConnected = false;

  show_loading: boolean = false;

  signaturePad: SignaturePad

  // Current device battery level
  batteryLevel = '';


  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;
  @ViewChild('sigPad') sigPad;
  @ViewChild('canvas') canvasEl: ElementRef

  signatureImg: string;
  sigPadElement;
  context;
  isDrawing = false;
  img;
  assignature1:any = null
  assignature2:any = null
  biometria1:any = null
  biometria2:any = null
  biometria3:any = null
  biometria4:any = null
  biometria5:any = null

  orientation = ThfTagOrientation.Horizontal;


  constructor(
    private bluetoothService: BluetoothService,
    private service: BiometricCrudService,
    public thfDialog: ThfDialogService,
  ) { }

  ngOnInit() {
    this.restore();
    this.empresa = localStorage.getItem('ent_epi_empresa') || '';
    this.estabel = localStorage.getItem('ent_epi_estabelecimento') || '';
    // device is null means than the device connection has been lost)
    // this.bluetoothService.getDevice$().subscribe(device => {
    //   this.deviceConnected = device? true : false;
    // });
    console.log(this.sigPad);

    /* this.sigPadElement = this.sigPad.nativeElement
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = '#3742fa'; */
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    /* const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
 */
     this.img = this.signaturePad.toDataURL("image/png");
    if(!this.assignature1){
      this.assignature1 = this.img;
      this.clearPad();
      return this.thfModal.close();
    }
    if(!this.assignature2){
      this.assignature2 = this.img;
      this.clearPad();
      return this.thfModal.close();
    }
    this.thfDialog.alert({title: 'Atenção', message: 'Remova uma das assinaturas para continuar!'});
    this.clearPad();
    return this.thfModal.close();

    console.log(this.assignature1, this.assignature2)
  }

  restore() {
    this.empresa = '';
    this.estabel = '';
    this.funcionario = null;
  }


  validaSave(){
    if(this.empresa == '' || !this.empresa){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe uma empresa para continuar!'});
      return false;
    }
    if(this.estabel == '' || !this.estabel){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe um estabelecimento para continuar!'});
      return false;
    }
    if(this.cdn_funcionario == null || !this.cdn_funcionario){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe uma matrícula para continuar!'});
      return false;
    }
    //TODO: Adicionar para ver também se alguma leitura de digital foi inserida
    if(!this.assignature1 && !this.assignature2){
      this.thfDialog.alert({title: 'Atenção', message: 'Adicione ao menos uma assinatura para continuar!'});
      return false;
    }
    return true;
  }

  save(clear?) {
    if(!this.validaSave()){
      return this;
    }
    this.setShowLoading(true);

    let data = {
      "metodo":"cadastroFunc",
      "paramFunc": {
          "cdn-funcionario": this.cdn_funcionario,
          "cod-estabel": this.estabel,
          "ep-codigo": this.empresa,
          "assinatura1": this.assignature1,
          "assinatura2": this.assignature2,
          "biometria1": this.biometria1,
          "biometria2": this.biometria2,
          "biometria3": this.biometria3,
          "biometria4": this.biometria4,
          "biometria5": this.biometria5

      }
    };

    this.service.apiCrudFunc(data, (response)=>{

      this.setShowLoading(false);

      if(response.items[0].hasOwnProperty('cod-erro')){
        let string_error = '';
        for (let error of response.items) {
          string_error = string_error + error['desc-erro'] + '. ';
        }
        this.thfDialog.alert({title: 'Atenção', message: string_error});
        return this;
      }

      if(response.items[0].hasOwnProperty('Sucesso')){

        this.thfDialog.alert({title: 'Sucesso', message: 'Registro salvo com sucesso!'});

        if(clear === true){
          this.limpar()
        }
        return this;
      }
      this.thfDialog.alert({title: 'Atenção', message: 'Algo deu errado ao salvar o registro!'});

      return this;
    },
    (error)=>{
      console.log('errooooooo', error);
      this.setShowLoading(false);
      //TODO: informar erro com dialog
      return this;
    } )

  }

  saveNew() {
    // console.log('método de salvar e limpar para cadastrar novo');
    return this.save(true);
  }

  limpar(){
    this.empresa = '';
    this.estabel = '';
    this.cdn_funcionario = null;
    this.funcionario = null;
    this.assignature1 = null;
    this.assignature2 = null;
    this.img = null;
    return this;
  }

  getDevice() {
    // you can get ask for the device observable in order to be notified when the device has (dis)connected
    // console.log(this.ble.getDevice$());
    // return this.ble.getDevice$();

    // console.log('2');
    // const sblendid = await Sblendid.powerOn();
    // console.log('3');
    // sblendid.startScanning(peripheral => {
    //   console.log('4');
    //   const { uuid, name, connectable, advertisement } = peripheral;
    //   const { txPowerLevel, manufacturerData, serviceUUIDs } = advertisement;

    //   console.log("Found Peripheral:");
    //   console.log(uuid, name, connectable);
    //   console.log(txPowerLevel, manufacturerData, serviceUUIDs);
    // });

    // // You need to power off your Bluetooth adapter or your Node process won't end
    // // Note the lower case "s", powerOff is a static and an instance method
    // await sblendid.powerOff();

     //stablish a connection between the browser and a bluetooth device

    this.bluetoothService.connectDevice$().subscribe(res => {
      console.log("jksdfbdshfs", res)

    });

    this.bluetoothService.getBatteryLevel$().subscribe(res => {
      console.log('fjkdsfsdbfdsjyjjsujsusjsj', res);
      // this.batteryLevel = res+"";
    })



  }

  scannerFingerPrint(){
    return this.getDevice();


    // var options = {};
    // Fingerprint2.getV18(options, function (result, components) {
    //   console.log('result',result);
    //   console.log('components',components);
    //   // result is murmur hash fingerprint
    //   // components is array of {key: 'foo', value: 'component value'}
    // })
  //   setTimeout(function () {
  //     Fingerprint2.get(function (components) {
  //       console.log(components) // an array of components: {key: ..., value: ...}
  //     })
  // }, 500)
  }

  getCanonicalUUID(uuid: string | number): string {
    if (typeof uuid === "number") uuid = uuid.toString(16);
    uuid = uuid.toLowerCase();
    if (uuid.length <= 8) uuid = ("00000000" + uuid).slice(-8) + "-0000-1000-8000-00805f9b34fb";
    if (uuid.length === 32) uuid = uuid.match(/^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/).splice(1).join("-");
    return uuid;
}

  connectDevice(){
    let options:any = {};
    options.acceptAllDevices = true;
    navigator.bluetooth.requestDevice(
      options
      // {filters: [{services: ['battery_service']}]}
    )
    .then(device => {
      console.log('> Name:             ' + device.name);
      console.log('> Id:               ' + device.id);
      console.log('> Connected:        ' + device.gatt.connected);
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {

      console.log('Getting Service...');
      // return server.getPrimaryService('battery_service');
      // var service_uuid = this.getCanonicalUUID(0x30);
      // console.log(service_uuid);
      // var service_uuid = this.getCanonicalUUID(0x1800);
      // console.log(service_uuid);
      // return server.getPrimaryService("0000180a-0000-1000-8000-00805f9b34fb");
      return server.getPrimaryService("00001800-0000-1000-8000-00805f9b34fb");
    })
    .then(service => {
      console.log("serviceeeeeeeee", service);
      console.log('Getting Characteristic...');
      // return service.getCharacteristic('battery_level');

      // var characteristic_uuid = this.getCanonicalUUID(0x2A01);
      // console.log(characteristic_uuid);
      // return service.getCharacteristics();
      return service.getCharacteristic(0x2A29);
      // return service.getCharacteristic(0x30);
    })
    // .then(characteristics => {
    //   console.log('> Characteristics: ' +
    //     characteristics.map(c => c.uuid).join('\n' + ' '.repeat(19)));
    // })
    .then(characteristic => {
      console.log('Reading Characteristic...');
      return characteristic.readValue();
    })
    .then(value => {
      console.log(value);
      let batteryLevel = value.getUint8(0);
      console.log('> Characteristic value is ' + batteryLevel + '');
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  //stablish a connection between the browser and a bluetooth device
  connectToDevice() {
    this.bluetoothService.connectDevice$().subscribe(res => {
      console.log("jksdfbdshfs", res);
      // this.deviceConnected = res? true : false;
    });
  }

  //get the current device battery level
  getBatteryLevel() {
    this.bluetoothService.getBatteryLevel$().subscribe(res => {
      this.batteryLevel = res+"";
    })
  }

  async novoTeste(){
    // - Request a port and open a connection.
    let port = await (navigator as any).serial.requestPort();
    console.log(port);
  }

  connectBluetoothDevice() {
    console.log('====================>>>>>>>>>>>>>>>>');
    navigator.bluetooth.requestDevice(
      {
        acceptAllDevices: true,
        optionalServices: [
                            0x1800,
                            '0000fff0-0000-1000-8000-00805f9b34fb',
                            '0000180a-0000-1000-8000-00805f9b34fb',
                            '49535343-fe7d-4ae5-8fa9-9fafd205e455',
                            '00001800-0000-1000-8000-00805f9b34fb'
                          ]
      }
      // {filters: [{services: ['battery_service']}]}
      )
    .then(device => {
      console.log('> Name:             ' + device.name);
      console.log('> Id:               ' + device.id);
      console.log('> Connected:        ' + device.gatt.connected);
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('Getting Service...');
      return server.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
    })
    .then(service => {
      console.log('Getting Battery Level Characteristic...');
      return service.getCharacteristic('49535343-6daa-4d02-abf6-19569aca69fe');
    })
    /* NOTIFICATION BEGIN */
    // .then(characteristic => {
    //   characteristic.startNotifications();
    //   characteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
    // })
    // .then(characteristic => {

    //   console.log('Notifications have been started.');
    // })
    /* NOTIFICATION end */

    /* READ BEGIN */
    .then(characteristic => {
/*      console.log('Reading VALUE...', characteristic);
      return characteristic.readValue();*/
      console.log('writing VALUE...', characteristic);
      let value = Uint8Array.of(0x46, 0x54, 0x00, 0x00, 0x21, 0x00, 0x00, this.calcCheckSum([], 7 + 0));
      // console.log('================================== ',characteristic.writeValueWithResponse(value));
      // console.log('***** Valor anteseeeeeee: ' , value);
      return characteristic.writeValueWithResponse(value).then(_ => {
                          console.log('***** Valor Lido value: ' , value);
                          console.log('***** Valor Lido characteristic: ' , characteristic);
      });
    })
    .then(value => {
      console.log('READING VALUE...', value);
      // let batteryLevel = value.getUint8(0);
      // console.log('> Battery Level is ' + batteryLevel + '%');
    })
    /* READ END */

    /* WRITE BEGIN */
    // .then(characteristic => {
    //   console.log('Writing Characteristic...');

    //   let value = Uint8Array.of(0);
    //   return characteristic.writeValueWithResponse(null);
    // })
    // .then(_ => {
    //   console.log('> Energy expended has been reset.');
    // })
    /* WRITE END */

    .catch(error => {
      console.log('Argh! ' + error);
    });

    // function handleCharacteristicValueChanged(event) {
    //   console.log(event.target.value.getUint8(0) + '%');
    // }


  }

  getAlertLevel(value) {
    let v = value.getUint8(0);
    return v;
  }

  openModalAssinatura(value, row, type, title) {
    this.thfModal.open();
  }


  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e) {
    this.isDrawing = false;
  }

  onMouseDown(e) {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }


  private relativeCoords(event) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  private calcCheckSum(buffer: any,size: any)
  {
      var sum = 0;
      for(let i=0;i<size;i++)
      {
          sum = sum + buffer[i];
      }
      return (sum & 0xffff);
  }

  /* clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
    this.img = null;
    return this;
  } */

  saveImage() {
    this.img = this.sigPadElement.toDataURL("image/png");
    if(!this.assignature1){
      this.assignature1 = this.img;
      this.clearPad();
      return this.thfModal.close();
    }
    if(!this.assignature2){
      this.assignature2 = this.img;
      this.clearPad();
      return this.thfModal.close();
    }
    this.thfDialog.alert({title: 'Atenção', message: 'Remova uma das assinaturas para continuar!'});
    this.clearPad();
    return this.thfModal.close();
  }

  removeAssignature(assignature){
    this[assignature] = null;
    return this;
  }

  getPrimaryAction(){
    console.log("SALVAR IMAGEM");
    return {
      label: 'Adicionar',
      danger:false,
      action: ()=>{this
        this.savePad()
      }
    }
  }

  getSecondaryAction(){
    console.log("Fechar modal");
  }

  changeEvent(event: string) {
    console.log(event);
  }

  validaSearch(){
    if(this.empresa == '' || !this.empresa){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe uma empresa para continuar!'});
      return false;
    }
    if(this.estabel == '' || !this.estabel){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe um estabelecimento para continuar!'});
      return false;
    }
    if(this.cdn_funcionario == null || !this.cdn_funcionario){
      this.thfDialog.alert({title: 'Atenção', message: 'Informe uma matrícula para continuar!'});
      return false;
    }
    if(!Number.isInteger(this.cdn_funcionario)){
      this.thfDialog.alert({title: 'Atenção', message: 'A matrícula deve ser um número inteiro!'});
      return false;
    }
    return true;
  }

  searchFunc(){

    if(!this.validaSearch()){
      return this;
    }
    this.setShowLoading(true);

    let data = {
      "metodo":"consultaFunc",
      "paramFunc": {
          "cdn-funcionario": this.cdn_funcionario,
          "cod-estabel": this.estabel,
          "ep-codigo": this.empresa
      }
    };


    this.service.apiCrudFunc(data, (response)=>{

      if(response.total == 0){
        this.thfDialog.alert({title: 'Atenção', message: 'Funcionário não encontrado!'});
        this.setShowLoading(false);
        return this;
      }

      if(response.items[0].hasOwnProperty('cod-erro')){
        let string_error = '';
        for (let error of response.items) {
          string_error = string_error + error['desc-erro'] + '. ';
        }
        this.thfDialog.alert({title: 'Atenção', message: string_error});
        this.setShowLoading(false);
        return this;
      }

      this.funcionario = response.items[0]['nome-func'];
      this.assignature1 = response.items[0]['assinatura1'] == '' ? null : response.items[0]['assinatura1'];
      this.assignature2 = response.items[0]['assinatura2'] == '' ? null : response.items[0]['assinatura2'];
      this.biometria1 = response.items[0]['biometria1'] == '' ? null : response.items[0]['biometria1'];
      this.biometria2 = response.items[0]['biometria2'] == '' ? null : response.items[0]['biometria2'];
      this.biometria3 = response.items[0]['biometria3'] == '' ? null : response.items[0]['biometria3'];
      this.biometria4 = response.items[0]['biometria4'] == '' ? null : response.items[0]['biometria4'];
      this.biometria5 = response.items[0]['biometria5'] == '' ? null : response.items[0]['biometria5'];
      this.setShowLoading(false);

    },
    (error)=>{
      console.log('errooooooo', error);
      //TODO: informar erro com dialog
      this.setShowLoading(false);
      return null;
    } )
  }

  getShowLoading(){ return this.show_loading; }
  setShowLoading(v){
    this.show_loading = v;
    return this;
  }
}

