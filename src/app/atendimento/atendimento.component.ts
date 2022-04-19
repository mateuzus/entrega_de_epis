import { Component, OnInit, ViewChild } from "@angular/core";
import { ThfDialogService } from "@totvs/thf-ui";
import { ActivatedRoute, Router } from "@angular/router";
import { AtendimentoService } from "./atendimento.service";
import { ConsultaEpisEntreguesComponent } from "../consulta-epis-entregues/consulta-epis-entregues.component";


@Component({
  selector: "app-atendimento",
  templateUrl: "./atendimento.component.html",
  styleUrls: ["./atendimento.component.css"],
  providers: [ConsultaEpisEntreguesComponent]
})
export class AtendimentoComponent implements OnInit {

  @ViewChild(ConsultaEpisEntreguesComponent) consulta: ConsultaEpisEntreguesComponent

  now = new Date();
  qtde_atender: string = "1,00";
  agrupar_lotes_wms: boolean = false;
  fechar_item_requisicao: boolean = false;
  data_atendimento: string | Date = new Date();
  data_atendimentoo = this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-" + this.now.getDate();
  data_atend: string | Date = new Date()
  show_loading: boolean = false;

  dateNow =
    this.now.getFullYear() +
    "-" +
    (this.now.getMonth() + 1) +
    "-" +
    this.now.getDate();

  item_atender: any;
  atender: any

  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this),
  };

  columns = [
    { property: "qtd-atend", label: "Qtde. Atender", required: true, width: '60px' },
    { property: "cod-depos", label: "Dep", readonly: true, width: '20%' },
    { property: "cod-localiz", label: "Localização", readonly: true, width: '20%' },
    { property: "it-codigo", label: "Cód. Estoque", readonly: true, width: '20%' },
    { property: "lote", label: "Lote", readonly: true, width: '20%' },
    // { property: 'validade', label: 'Validade', readonly: true},
    { property: "cod-refer", label: "Referência", readonly: true, width: '20%' },
    { property: "qtidade-dsp", label: "Saldo Disp.", readonly: true, width: '20%' },
    // { property: 'em_proc', label: 'Em Proc', readonly: true},
  ];

  data = [];

  constructor(
    public thfDialog: ThfDialogService,
    private router: Router,
    protected activated_route: ActivatedRoute,
    private service: AtendimentoService,
  ) { }

  ngOnInit() {
    //EPI único
    this.atender = this.getParams();
    console.log(this.atender)
    //vários EPIs
    this.item_atender = JSON.parse(localStorage.getItem('epi'))
    console.log(this.item_atender)
    this.qtde_atender = this.atender["qtd-entreg-epi"];
    let parts = this.atender["dat-entreg-epi"]
    this.data_atendimento = new Date(parts[0], parts[1] - 1, parts[2])
    this.data_atend = new Date(parts[0], parts[1] - 1, parts[2])
    this.loadData();
    this.loadvarios()
  }

  onBeforeSave(row: any, old: any) {
    console.log("teste aqui", row, old);
    return row.occupation !== "Engineer";
  }

  onAfterSave(row) {
    console.log("onAfterSave(new): ", row);
  }

  onBeforeRemove(row) {
    // console.log('onBeforeRemove: ', row);

    return true;
  }

  onAfterRemove(row) {
    // console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    // console.log('onBeforeInsert: ', row);

    return true;
  }
  submit() {
    let qtd_atender_total = 0;
    for (const item of this.data) {
      if (parseFloat(item["qtd-atend"]) > item["qtidade-dsp"]) {
        this.thfDialog.alert({
          title: "Atenção",
          message:
            "A quantidade a atender não pode ser maior que o saldo disponível.",
        });
        return this;
      }

      if (parseFloat(item["qtd-atend"]) < 0) {
        this.thfDialog.alert({
          title: "Atenção",
          message: "A quantidade a atender não pode ser negativa.",
        });
        return this;
      }

      qtd_atender_total += parseFloat(item["qtd-atend"]);
    }

    if (qtd_atender_total != parseFloat(this.qtde_atender)) {
      this.thfDialog.alert({ title: 'Atenção', message: 'A quantidade total atendida deve ser igual a quantidade a atender.' });
      return this;
    }

    if (!this.data_atendimentoo) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "A Data de atendimento deve ser informada.",
      });
      return this;
    }

    this.setShowLoading(true);

    let saldo = [];

    for (const item of this.data) {
      saldo.push({
        "cdn-estab": item["cod-estabel"],
        "cod-depos": item["cod-depos"],
        "cod-localiz": item["cod-localiz"],
        "cod-lote": item["lote"],
        "qtd-atend": parseFloat(item["qtd-atend"]),

      });
      console.log('saldo', saldo)
    }

    this.data_atend = this.now.getFullYear() +
      "-" +
      (this.now.getMonth() + 1) +
      "-" +
      this.now.getDate();

    let tt_param2 = this.item_atender.map(item => {
      return {
        "cdn-funcionario": item['cdn-funcionario'],
        "ep-codigo": item['ep-codigo'],
        "cod-estabel": item['cod-estabel'],
        "cod-epi": item['cod-epi'],
        "cdn-fornecedor": item['cdn-fornecedor'],
        "dat-entreg-epi": item['dat-entreg-epi'],
        "tp-assinatura": item['tp-assinatura'],
        "assinatura": item['assinatura'],
        "usuar_trans": ""
      }
    })

    let tt_param = {
      "cdn-funcionario": parseInt(this.atender["cdn-funcionario"]),
      "ep-codigo": this.atender["cdn-empresa"],
      "cod-estabel": this.atender["cod-estabel"],
      "cod-epi": this.atender["cod-epi"],
      "cdn-fornecedor": parseInt(this.atender["cdn-fornecedor"]),
      "dat-entreg-epi": this.formatDate(this.data_atendimentoo),
      "tp-assinatura": parseInt(this.atender["tipo_autenticacao"]),
      "assinatura": this.atender["autenticacao"],

      usuar_trans: "",
      saldo: saldo,
    };

    let data_envio = {
      metodo: "atendimentoEPI",
      paramEPI: tt_param,
    };

    let todos = {
      metodo: "atendtodosEPI",
      paramEPI: tt_param2
    }

    //atender vários
    this.service.apiCrudEpi(todos, (response) => {
      console.log(todos, response)
      if (response.items[0].hasOwnProperty("cod-erro")) {
        let string_error = ""
        for (let error of response.item) {
          string_error = string_error + error["desc-erro"] + ". "
        }
        this.thfDialog.alert({ title: "Atenção", message: string_error })
        this.setShowLoading(false)
        return this
      }

      this.setShowLoading(false)
      this.thfDialog.alert({ title: "Sucesso", message: "Atendimento realizado com sucesso!" })
      this.router.navigate(["epi-entregues"])
    }),
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }


    //primeiro atender
    this.service.apiCrudEpi(
      data_envio,
      (response) => {
        console.log("Aqui terceiro", response)
        if (response.items[0].hasOwnProperty("cod-erro")) {

          let string_error = "";
          for (let error of response.items) {
            string_error = string_error + error["desc-erro"] + ". ";
          }
          this.thfDialog.alert({ title: "Atenção", message: string_error });
          this.setShowLoading(false);
          return this;
        }

        this.setShowLoading(false);
        this.thfDialog.alert({
          title: "Sucesso",
          message: "Atendimento realizado com sucesso!",
        });
        this.router.navigate(["epi-entregues"]);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );

  }

  public getParams(property?: string) {
    let a: any = this.getActivatedRoute();
    let b: any = a.queryParams;
    let v = b.getValue();

    if (!property) {
      return v;
    }
    if (!v.hasOwnProperty(property)) {
      return null;
    }
    return v[property];
  }

  public getActivatedRoute() {
    return this.activated_route;
  }

  getShowLoading() {
    return this.show_loading;
  }
  setShowLoading(v) {
    this.show_loading = v;
    return this;
  }

  loadData() {
    this.setShowLoading(true);
    //atender é o EPI individual
    let tt_param = {
      "cdn-funcionario": parseInt(this.atender["cdn-funcionario"]),
      "ep-codigo": this.atender["cdn-empresa"],
      "cod-estabel": this.atender["cod-estabel"],
      "cod-epi": this.atender["cod-epi"],
      "cdn-fornecedor": parseInt(this.atender["cdn-fornecedor"]),
      "dat-entreg-epi": this.atender['dat-entreg-epi'],
    };

    let data_envio = {
      metodo: "saldoEPI", //TODO: Rever o método que tem que chamar
      paramEPI: tt_param,
    };

    this.service.apiCrudEpi(
      data_envio,
      (response) => {
        console.log("Aqui primeiro", data_envio);
        console.log("Aqui segundo", response);
        //TODO: verificar como será o retorno para tratar caso de erro
        if (response.total == 0) {
          this.thfDialog.alert({
            title: "Atenção",
            message: "Não existe saldo para atendimento!",
          });
          this.setShowLoading(false);
          return this;
        }

        if (response.items[0].hasOwnProperty("cod-erro")) {
          let string_error = "";
          for (let error of response.items) {
            string_error = string_error + error["desc-erro"] + ". ";
          }
          this.thfDialog.alert({ title: "Atenção", message: string_error });
          this.setShowLoading(false);
          return this;
        }

        this.data = response.items;
        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog

        this.setShowLoading(false);
        return null;
      }
    );
  }

  loadvarios() {
    this.setShowLoading(true);
    //atender é o EPI individual
    
    //item_atender são vários EPIs
    let tt_param2 = this.item_atender.map(item => {
      return {
        "cdn-funcionario": parseInt(item["cdn-funcionario"]),
        "ep-codigo": item["cdn-empresa"],
        "cod-estabel": item["cod-estabel"],
        "cod-epi": item["cod-epi"],
        "cdn-fornecedor": parseInt(item["cdn-fornecedor"]),
        "dat-entreg-epi": this.data_atendimentoo,
      }
    })

    console.log(tt_param2)

    let todos = {
      metodo: "saldoEPI",
      paramEPI: tt_param2
    }


    this.service.apiCrudEpi(
      todos,
      (response) => {
        console.log("Aqui primeiro", todos);
        console.log("Aqui segundo", response);
        //TODO: verificar como será o retorno para tratar caso de erro
         if (response.total == 0) {
          this.thfDialog.alert({
            title: "Atenção",
            message: "Não existe saldo para atendimento!",
          });
          this.setShowLoading(false);
          return this;
        }

        if (response.items[0].hasOwnProperty("cod-erro")) {
          let string_error = "";
          for (let error of response.items) {
            string_error = string_error + error["desc-erro"] + ". ";
          }
          this.thfDialog.alert({ title: "Atenção", message: string_error });
          this.setShowLoading(false);
          return this;
        }

        this.data = response.items;
        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog

        this.setShowLoading(false);
        return null;
      }
    );
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
