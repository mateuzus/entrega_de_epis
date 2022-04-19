import { ThfModalAction } from "@totvs/thf-ui/components/thf-modal";
import { ThfSelectOption, ThfComboOption, ThfTableColumn, ThfTableComponent } from "@totvs/thf-ui";
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import SignaturePad from 'signature_pad'
import { Router } from "@angular/router";
import { ThfDialogService, ThfModalComponent } from "@totvs/thf-ui";
import { ConsultaEpisEntreguesService } from "./consulta-epis-entregues.service";
import { AtendimentoService } from "../atendimento/atendimento.service";

const authentication_type_default = "2";

@Component({
  selector: "app-consulta-epis-entregues",
  templateUrl: "./consulta-epis-entregues.component.html",
  styleUrls: ["./consulta-epis-entregues.component.css"],
  providers: [ConsultaEpisEntreguesService],
})
export class ConsultaEpisEntreguesComponent implements OnInit {
  carregou_epis: boolean = false;
  epis_list: Array<ThfComboOption> = [];
  fornecs_list: Array<ThfSelectOption> = [];
  now: any = new Date();
  dateNow = this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-" + this.now.getDate();
  qtd = 1;
  columns: Array<ThfTableColumn>;
  items: Array<any>;

  url_get_epis: string = "";

  modal_type: any = "getAssignature";
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;
  @ViewChild("sigPadAssignature") sigPad;
  @ViewChild('canvas') canvasEl: ElementRef
  @ViewChild(ThfTableComponent) thfTable: ThfTableComponent;

  tableData: Array<object>;
  cdnEmp = "";
  nameFunc = "";
  cdnFunc = "";
  codCargo = "";
  codEstab = "";
  dateAdm = "";
  desCargo = "";
  descUnid = "";
  undLotac = "";
  tableColumns: Array<any>;
  codEstabelecimento = "1";
  descEpi = "";
  codEpi = "";
  response;


  paramsConsEpi;
  signaturePad: SignaturePad

  title: any;
  registro_selecionado: any;
  authentication_type: string = authentication_type_default;

  authentication_type_options = [
    { label: "Assinatura", value: 1 },
    { label: "Digital", value: 2 },
  ];

  sigPadElement;
  context;
  isDrawing = false;
  img;
  assignature1;
  assignature2;

  show_loading: boolean = false;

  /* public readonly actions: Array<ThfPageAction> = [
    { label: 'Incluir', action: this.abrirModalAdd.bind(this), disabled: false }
  ]; */

  private modal_primary_action_attend: ThfModalAction = {
    label: "Atender",
    danger: false,
    action: () => {
      this;
      this.goToAttend();
    },
  };
  private modal_secondary_action_attend: ThfModalAction = {
    label: "Fechar",
    danger: true,
    action: () => {
      this.thfModal.close();
    },
  };
  private modal_primary_action_detalhe: ThfModalAction = {
    label: "Fechar",
    danger: false,
    action: () => {
      this;
      this.thfModal.close();
    },
  };

  private modal_primary_action_getAssignature: ThfModalAction = {
    label: "Atender",
    danger: false,
    action: () => {
      this;
      this.goToAttend();
    },
  };

  private modal_primary_action_salvar: ThfModalAction = {
    label: "Salvar",
    danger: false,
    action: () => {
      this;
      this.goToSave();
    },
  };
  private modal_primary_action_add: ThfModalAction = {
    label: "Salvar",
    danger: false,
    action: () => {
      this;
      this.goToAdd();
      this.thfModal.close();
      this.onQuickSearch2();
      this.resetForm();
    },
  };

  private modal_primary_action_detalhes: ThfModalAction = {
    label: "Detalhes",
    danger: false,
    action: () => {
      this;
      this.thfModal.open();
    },
  };

  private modal_primary_action_detalhes_func: ThfModalAction = {
    label: "Fechar",
    danger: true,
    action: () => {
      this;
      this.thfModal.close();
      /* this.hello() */
    },
  };

  private modal_secondary_action_cancelar: ThfModalAction = {
    label: "Cancelar",
    danger: true,
    action: () => {
      this.thfModal.close();
    },
  };

  private modal_primary_action_excluir: ThfModalAction = {
    label: "Excluir",
    danger: false,
    action: () => {
      this;
      this.goToDelete();
      this.thfModal.close();
      this.onQuickSearch2();
    },
  };
  private modal_secondary_action_excluir: ThfModalAction = {
    label: "Cancelar",
    danger: true,
    action: () => {
      this.thfModal.close();
    },
  };

  private situationOptions: Array<object> = [];

  // public readonly actions: Array<ThfPageAction> = [
  //   { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) }
  // ];

  public readonly filters: Array<any> = [
    // { property: 'situacao', label: 'Situação', options: this.situationOptions, gridColumns: 12 },
    // { property: 'cod_epi', label: 'Código da EPI', gridColumns: 4 },
    // { property: 'desc_epi', label: 'EPI', gridColumns: 8 },
    { property: "cdn-empresa", label: "CDN empresa", gridColumns: 6 },
    { property: "cod-estabel", label: "CDN Estabelecimento", gridColumns: 6 },
    {
      property: "cdn-funcionario",
      label: "Matrícula do funcionário",
      gridColumns: 6,
    },
    { property: "nome-func", label: "Nome do funcionário", gridColumns: 6 },
    {
      property: "entrega-pend",
      label: "Entrega pendente",
      options: [
        { value: true, label: "Sim" },
        { value: false, label: "Não" },
      ],
      gridColumns: 6,
    },
    {
      property: "dt-ent-ini",
      label: "Data entrada início",
      gridColumns: 6,
      type: "date",
    },
    {
      property: "dt-ent-fim",
      label: "Data entrada fim",
      gridColumns: 6,
      type: "date",
    },
    { property: "epi-ini", label: "EPI início", gridColumns: 6 },
    { property: "epi-fim", label: "EPI fim", gridColumns: 6 },
    // { property: 'nome_func', label: 'Nome do funcionário', gridColumns: 8 },
    // { property: 'cdn_fornec', label: 'Código do fornecedor', gridColumns: 4 },
    // { property: 'nome_fornec', label: 'Nome do fornecedor', gridColumns: 8 },
  ];

  constructor(
    private service: ConsultaEpisEntreguesService,
    private router: Router,
    public thfDialog: ThfDialogService,
    private serviceAtend: AtendimentoService
  ) {
    // this.url_get_epis = this.service.getBaseUrl() + 'api-consult-epi';
  }

  ngOnInit() {
    this.loadEpis();
    /* this.sigPadElement = this.sigPad.nativeElement; */
    /* this.context = this.sigPadElement.getContext("2d");
    this.context.strokeStyle = "#3742fa"; */
    this.loadInitial();
    this.updateFilters();
    this.columns = this.getColumns();
    this.items = this.getItems();

    this.onQuickSearch2();
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

  loadInitial() {
    this.loadTableColumns(); //.loadSituationOptions().loadTableData();
  }

  loadSituationOptions() {
    this.situationOptions = this.service.getSituationOptions();
    return this;
  }

  loadTableColumns() {
    this.tableColumns = this.service.getColumns(this);
    return this;
  }

  loadTableData(filter?) {
    this.service.getItems(
      filter,
      (response) => {
        this.tableData = response.items;
        
        this.addActionsOnItens();
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        return null;
      }
    );
    return this;
  }

  loadTableDataFilter(filter) {
    this.tableData = this.service.getItemsFilter(filter);

    this.addActionsOnItens();
    return this;
  }

  onAdvancedSearch(filter, fromModal?) {
    // if(this.isEmptyFilter(filter)){
    //   if(fromModal === true){
    //     this.thfDialog.alert({title: 'Atenção', message: 'Informe ao menos um campo para continuar!'});
    //     this.setShowLoading(false);
    //     return this;
    //   }
    // }

    if (!filter.hasOwnProperty("cdn-funcionario")) {
      this.thfDialog.alert({
        title: "Atenção",
        message:
          "É necessário informar a matrícula do funcionário para continuar!",
      });
      this.setShowLoading(false);
      return this;
    }

    if (!filter.hasOwnProperty("nome-func")) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "É necessário informar o nome do funcionário para continuar",
      });
      this.setShowLoading(false);
      return this;
    }

    if (!filter.hasOwnProperty("cdn-empresa") && fromModal) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "É necessário informar a empresa para continuar!",
      });
      this.setShowLoading(false);
      return this;
    }
    if (!filter.hasOwnProperty("cod-estabel") && fromModal) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "É necessário informar o estabelecimento para continuar!",
      });
      this.setShowLoading(false);
      return this;
    }

    let cdn_func = filter.hasOwnProperty("cdn-funcionario")
      ? filter["cdn-funcionario"]
      : "";

    if (!Number.isInteger(parseInt(cdn_func)) && cdn_func != "") {
      this.thfDialog.alert({
        title: "Atenção",
        message: "A matrícula deve ser um número inteiro!",
      });
      return false;
    }

    let empresa_padrao = localStorage.getItem("ent_epi_empresa") || "";
    let estabelecimento_padrao =
      localStorage.getItem("ent_epi_estabelecimento") || "";

    let filter_use = {
      "cdn-funcionario": parseInt(cdn_func),
      "nome-func": filter.hasOwnProperty("nome-func")
        ? filter["nome-func"]
        : "",
      "ep-codigo": filter.hasOwnProperty("cdn-empresa")
        ? filter["cdn-empresa"]
        : empresa_padrao,
      "cod-estabel": filter.hasOwnProperty("cod-estabel")
        ? filter["cod-estabel"]
        : estabelecimento_padrao,
      "dt-ent-ini": filter.hasOwnProperty("dt-ent-ini")
        ? filter["dt-ent-ini"]
        : "2000-01-01",
      "dt-ent-fim": filter.hasOwnProperty("dt-ent-fim")
        ? filter["dt-ent-fim"]
        : "9999-12-31",
      "epi-ini": filter.hasOwnProperty("epi-ini") ? filter["epi-ini"] : "",
      "epi-fim": filter.hasOwnProperty("epi-fim")
        ? filter["epi-fim"]
        : "ZZZZZZZZ",
      "entrega-pend": filter.hasOwnProperty("entrega-pend")
        ? filter["entrega-pend"]
        : "true",
    };

    this.setShowLoading(true);
    let data = {
      metodo: "funcionarioEPI",
      paramEPI: filter_use,
    };

    this.service.apiCrudEpi(
      data,
      (response) => {
        console.log(response)
        this.tableData = response.items;
        this.addActionsOnItens();
        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );
    // this.isEmptyFilter(filter) ? this.loadTableData() : this.loadTableData(filter);
  }

  /**
   * Evento disparado ao remover um ou todos os filtros pelo usuário.
   * @param disclaimers
   */
  onChangeDisclaimers(disclaimers) {
    this.setShowLoading(true);
    const filter = {};
    disclaimers.forEach((item) => {
      filter[item.property] = item.value;
    });

    this.onAdvancedSearch(filter);
  }

  /**
   * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
   * @param filter
   */
  onQuickSearch(filter) {
    localStorage.setItem("filter", filter);

    if (this.isEmptyFilter(filter)) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "Informe o nome ou matrícula de um funcionário!",
      });
      return this;
    }

    if (!Number.isInteger(parseInt(filter))) {
      this.thfDialog.alert({
        title: "Atenção",
        message: "A matrícula deve ser um número inteiro!",
      });
      return false;
    }

    this.setShowLoading(true);

    let empresa_padrao = localStorage.getItem("ent_epi_empresa") || "";
    let estabelecimento_padrao =
      localStorage.getItem("ent_epi_estabelecimento") || "";

    let filter_use = {
      "cdn-funcionario": parseInt(filter),
      "ep-codigo": empresa_padrao,
      "cod-estabel": estabelecimento_padrao,
      "dt-ent-fim": "9999-12-31",
      "dt-ent-ini": "2000-01-01",
      "entrega-pend": "true",
      "epi-fim": "ZZZZZZZZ",
      "epi-ini": "",
    };

    let data = {
      metodo: "funcionarioEPI",
      paramEPI: filter_use,
    };

    let dataFunc = {
      metodo: "consultaFunc",
      paramFunc: {
        "cdn-funcionario": filter_use["cdn-funcionario"],
        "cod-estabel": "1",
        "ep-codigo": "1",
      },
    };

    this.service.apiCrudFunc(dataFunc, (response) => {
      this.nameFunc = response.items[0]["nome-func"];
      this.cdnEmp = response.items[0]["cdn-empresa"];
      this.cdnFunc = response.items[0]["cdn-funcionario"];
      this.codCargo = response.items[0]["cod-cargo-basic"];
      this.codEstab = response.items[0]["cod-estabel"];
      this.dateAdm = response.items[0]["dat-admissao"];
      this.desCargo = response.items[0]["des-cargo-basic"];
      this.descUnid = response.items[0]["desc-unid-lotac"];
      this.undLotac = response.items[0]["unid-lotac"];

      this.items = this.getItems();
    });

    this.service.getItems(
      data,
      (response) => {
        this.tableData = response.items;
        this.addActionsOnItens();
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

  onQuickSearch2(filter?) {
    filter = localStorage.getItem("filter");

    if (this.isEmptyFilter(filter)) {
      /* this.thfDialog.alert({ title: 'Atenção', message: 'Informe o nome ou matrícula de um funcionário!' }); */
      return this;
    }

    if (!Number.isInteger(parseInt(filter))) {
      /* this.thfDialog.alert({ title: 'Atenção', message: 'A matrícula deve ser um número inteiro!' }); */
      return false;
    }

    this.setShowLoading(true);

    let empresa_padrao = localStorage.getItem("ent_epi_empresa") || "";
    let estabelecimento_padrao =
      localStorage.getItem("ent_epi_estabelecimento") || "";

    let filter_use = {
      "cdn-funcionario": parseInt(filter),
      "ep-codigo": empresa_padrao,
      "cod-estabel": estabelecimento_padrao,
      "dt-ent-fim": "9999-12-31",
      "dt-ent-ini": "2000-01-01",
      "entrega-pend": "true",
      "epi-fim": "ZZZZZZZZ",
      "epi-ini": "",
    };

    let data = {
      metodo: "funcionarioEPI",
      paramEPI: filter_use,
    };

    let dataFunc = {
      metodo: "consultaFunc",
      paramFunc: {
        "cdn-funcionario": filter_use["cdn-funcionario"],
        "cod-estabel": "1",
        "ep-codigo": "1",
      },
    };

    this.service.apiCrudFunc(dataFunc, (response) => {
      this.nameFunc = response.items[0]["nome-func"];
      this.cdnEmp = response.items[0]["cdn-empresa"];
      this.cdnFunc = response.items[0]["cdn-funcionario"];
      this.codCargo = response.items[0]["cod-cargo-basic"];
      this.codEstab = response.items[0]["cod-estabel"];
      this.dateAdm = response.items[0]["dat-admissao"];
      this.desCargo = response.items[0]["des-cargo-basic"];
      this.descUnid = response.items[0]["desc-unid-lotac"];
      this.undLotac = response.items[0]["unid-lotac"];

      this.items = this.getItems();
    });

    this.service.getItems(
      data,
      (response) => {
        console.log(data)
         this.tableData = response.items
         console.log('aqui', this.tableData)

        this.addActionsOnItens()
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

  isEmptyFilter(obj) {
    if (!obj) {
      return true;
    }
    return Object.keys(obj).length === 0;
  }

  loadEpis() {
    if (!this.getCarregouEpis()) {
      this.setShowLoading(true);

      this.service.apiConsultaEpi(
        (response) => {

          if (response.total == 0) {
            this.thfDialog.alert({
              title: "Atenção",
              message: "Epis não encontrados!",
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
          if (!response.items[0].hasOwnProperty("ds_fornec")) {
            this.thfDialog.alert({
              title: "Atenção",
              message: "Epis não encontrados!",
            });
            this.setShowLoading(false);
            return this;
          }

          let epis = response.items[0].ds_fornec["tt-cons-epi"].map((el) => {
            return { label: el.cod_epi + " - " + el.nome, value: el.cod_epi };
          });

          this.setEpisList(epis);

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
  }

  abrirModalDetalhes(value, row, type, title) {
    this.title = title;
    this.registro_selecionado = value;
    this.modal_type = type;
    /* this.authentication_type = authentication_type_default; */
    this.loadFornecedores(this.registro_selecionado["cod-epi"]);
    this.goToDelete()
  }

  abrirModalDetalhe(value, row, type, title) {
    this.title = title;
    this.registro_selecionado = value;
    this.modal_type = type;
    /* this.authentication_type = authentication_type_default; */
    this.loadFornecedores(this.registro_selecionado["cod-epi"]);
    this.goToAttend()
  }

  abrirModalAdd() {
    this.modal_type = 'add'
    // this.loadEpis();
    this.title = "Adicionar";
    this.registro_selecionado = {
      "cod-epi": null,
    };
    this.modal_type = "add";
    this.authentication_type = authentication_type_default;
    this.thfModal.open();
    this.onQuickSearch2()
  }

  private resetFilters() {
    this.tableData = []; // = this.sampleHiringProcessesService.resetFilterHiringProcess();
  }

  private searchItems(filter) {
    this.tableData = []; // = this.sampleHiringProcessesService.filter(filter);
  }

  private updateFilters() {
    // this.filters[0].options = this.situationOptions;
  }

  changeAuthenticationType(event) {
    //não utilizado
    // this.authentication_type = event;
  }

  getPrimaryAction() {
    let actions = {
      attend: this.modal_primary_action_attend,
      getAssignature: this.modal_primary_action_getAssignature,
      detail: this.modal_primary_action_detalhe,
      edit: this.modal_primary_action_salvar,
      delete: this.modal_primary_action_excluir,
      add: this.modal_primary_action_add,
      detalhes: this.modal_primary_action_detalhes,
      funcDetail: this.modal_primary_action_detalhes_func
    };

    return actions[this.modal_type];
    return this.modal_type == "attend"
      ? this.modal_primary_action_attend
      : null;
  }
  getSecondaryAction() {
    let actions = {
      attend: this.modal_secondary_action_attend,
      getAssignature: null,
      detail: null,
      edit: this.modal_secondary_action_cancelar,
      add: this.modal_secondary_action_cancelar,
      delete: this.modal_secondary_action_excluir,
      detalhes: this.modal_primary_action_detalhes,
      /* funcDetail: this.modal_primary_action_detalhes_func */
    };

    return actions[this.modal_type];
    return this.modal_type == "attend"
      ? this.modal_secondary_action_attend
      : null;
  }

  goToGetAuthentication() {
    if (this.authentication_type == "1") {
      // this.thfModal.close();
      this.modal_type = "getAssignature";
      this.title = "Assinar";

      this.thfModal.open();
    } else {
      this.thfDialog.alert({
        title: "Atenção",
        message: "Essa opção ainda não está disponível!",
      });
    }
  }

  goToSave() {
    this.setShowLoading(true);

    let data = {
      "tt-param": [
        {
          "tp-oper": 2, //alteração
        },
      ],
      "tt-epi": [
        {
          cdn_estab: this.codEstabelecimento,
          cdn_funcionario: this.cdnFunc,
          cod_epi: this.registro_selecionado["cod_epi"],
          cdn_fornecedor: this.registro_selecionado["cdn-fornecedor"],
          dat_entreg_epi: this.dateNow,
          qtd_entreg_epi: this.qtd,
          cod_unid_med_epi: this.registro_selecionado["unid-med-epi"],
          dat_subst_epi: this.registro_selecionado["dat-subst-epi"]
            ? this.registro_selecionado["dat-subst-epi"]
            : null,
        },
      ],
    };

    this.service.apiCrudEpiFunc(
      data,
      (response) => {
        console.log(response);
        if (response.items[0].ds_ret["tt-ret"][0].chave != "OK") {
          // let string_error = '';
          // for (let error of response.items[0].ds_ret['tt-ret']) {
          //   string_error = string_error + error['mensagem'] + '. ';
          // }
          // this.thfDialog.alert({title: 'Atenção', message: string_error});
          this.thfDialog.alert({
            title: "Atenção",
            message: response.items[0].ds_ret["tt-ret"][0].mensagem,
          });
          this.setShowLoading(false);
          return this;
        }

        this.thfDialog.alert({
          title: "Sucesso",
          message: response.items[0].ds_ret["tt-ret"][0].mensagem,
        });

        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );
    this.onQuickSearch2();
  }

  postEpiDesc() {
    this.paramsConsEpi = {
      cod_epi: this.registro_selecionado["cod-epi"],
    };
    this.service.postEpiDesc(this.paramsConsEpi, (response) => {
      this.codEpi = response.items[0].ds_fornec["tt-cons-epi"][0].cod_epi;
      this.descEpi = response.items[0].ds_fornec["tt-cons-epi"][0].nome;
      this.codEpi = this.codEpi;
      this.descEpi = this.descEpi;
      this.loadFornecedores(this.codEpi);
    });
  }

  goToDelete() {
    this.setShowLoading(true);

    let data = {
      "tt-param": [
        {
          "tp-oper": 3, //deleção
        },
      ],
      "tt-epi": [
        {
          cdn_estab: this.codEstabelecimento,
          cdn_funcionario: this.cdnFunc,
          cod_epi: this.registro_selecionado["cod-epi"],
          cdn_fornecedor: this.registro_selecionado["cdn-fornecedor"],
          dat_entreg_epi:
            this.registro_selecionado["dat-entreg-epi"].getFullYear() +
            "-" +
            (this.registro_selecionado["dat-entreg-epi"].getMonth() + 1) +
            "-" +
            this.registro_selecionado["dat-entreg-epi"].getDate(),
          qtd_entreg_epi: this.qtd,
          cod_unid_med_epi: this.registro_selecionado["unid-med-epi"],
          dat_subst_epi: this.registro_selecionado["dat-subst-epi"],
        },
      ],
    };

    this.service.apiCrudEpiFunc(
      data,
      (response) => {
        console.log(response)
        if (response.items[0].ds_ret["tt-ret"][0].chave != "OK") {
          // let string_error = '';
          // for (let error of response.items[0].ds_ret['tt-ret']) {
          //   string_error = string_error + error['mensagem'] + '. ';
          // }
          // this.thfDialog.alert({title: 'Atenção', message: string_error});
          this.thfDialog.alert({
            title: "Atenção",
            message: response.items[0].ds_ret["tt-ret"][0].mensagem,
          });
          this.setShowLoading(false);
          return this;
        }

        this.thfDialog.alert({
          title: "Sucesso",
          message: response.items[0].ds_ret["tt-ret"][0].mensagem,
        });

        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );
    this.onQuickSearch2();
  }
  goToAdd() {
    this.setShowLoading(true);

    let data = {
      "tt-param": [
        {
          "tp-oper": 1, //inclusão
        },
      ],
      "tt-epi": [
        {
          cdn_estab: this.codEstabelecimento,
          cdn_funcionario: this.cdnFunc,
          cod_epi: this.paramsConsEpi["cod_epi"],
          cdn_fornecedor: this.registro_selecionado["cdn-fornecedor"],
          dat_entreg_epi: this.dateNow,
          qtd_entreg_epi: this.qtd,
          cod_unid_med_epi: this.registro_selecionado["unid-med-epi"],
          dat_subst_epi: this.registro_selecionado["dat-subst-epi"]
            ? this.registro_selecionado["dat-subst-epi"].split("T")[0]
            : null,
        },
      ],
    };

    this.service.apiCrudEpiFunc(
      data,
      (response) => {
        console.log(response);
        if (response.items[0].ds_ret["tt-ret"][0].chave != "OK") {
          // let string_error = '';
          // for (let error of response.items[0].ds_ret['tt-ret']) {
          //   string_error = string_error + error['mensagem'] + '. ';
          // }
          // this.thfDialog.alert({title: 'Atenção', message: string_error});
          this.thfDialog.alert({
            title: "Atenção",
            message: response.items[0].ds_ret["tt-ret"][0].mensagem,
          });
          this.setShowLoading(false);
          return this;
        }

        this.thfDialog.alert({
          title: "Sucesso",
          message: response.items[0].ds_ret["tt-ret"][0].mensagem,
        });

        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );
    this.onQuickSearch2();
  }

  goToAttend() {
    var dados = this.registro_selecionado;

    let tt_param = [{
      'cdn-funcionario': parseInt(dados['cdn-funcionario']),
      "ep-codigo": dados["cdn-empresa"],
      "cod-estabel": dados["cod-estabel"],
      "cod-epi": dados["cod-epi"],
      "cdn-fornecedor": parseInt(dados["cdn-fornecedor"]),
      "dat-entreg-epi": this.formatDate(dados['dat-entreg-epi']),
      "tp-assinatura": 1,
      "assinatura": "",
      "usuar_trans": ""
    }]

    let data_envio = {
      metodo: "atendtodosEPI",
      'paramEPI': tt_param
    }

    this.serviceAtend.apiCrudEpi(data_envio, (response) => {
      console.log(data_envio, response)

      if (response.items[0] == 0) {
        this.thfDialog.alert({ title: "Atenção", message: "Não existe saldo para o EPI!" })
      }

      this.setShowLoading(false);
      this.thfDialog.alert({ title: 'Sucesso', message: "Atendimento realizado com sucesso!" });
      this.onQuickSearch2()
    })

  }

  @HostListener("document:mouseup", ["$event"])
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

  clear() {
    this.context.clearRect(
      0,
      0,
      this.sigPadElement.width,
      this.sigPadElement.height
    );
    this.context.beginPath();
    this.img = null;
    this.assignature1 = null;
    this.assignature2 = null;
    return this;
  }

  compareImage() {
    this.img = this.signaturePad.toDataURL("image/png");

    this.setShowLoading(true);

    let data = {
      metodo: "consultaFunc",
      paramFunc: {
        "cdn-funcionario": this.cdnFunc,
        "cod-estabel": this.codEstabelecimento,
        "ep-codigo": this.registro_selecionado["cdn-empresa"],
      },
    };

    this.service.apiCrudFunc(
      data,
      (response) => {
        if (response.total == 0) {
          this.thfDialog.alert({
            title: "Atenção",
            message: "Funcionário não encontrado!",
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

        this.assignature1 =
          response.items[0]["assinatura1"] == ""
            ? null
            : response.items[0]["assinatura1"];
        this.assignature2 =
          response.items[0]["assinatura2"] == ""
            ? null
            : response.items[0]["assinatura2"];

        if (!this.assignature1 && !this.assignature1) {
          this.thfDialog.alert({
            title: "Atenção",
            message: "O funcionário não possui uma assinatura cadastrada!",
          });
        }

        this.setShowLoading(false);
      },
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }
    );

    // if(!this.assignature1){
    //   this.assignature1 = this.img;
    //   this.clear();
    //   return this.thfModal.close();
    // }
    // if(!this.assignature2){
    //   this.assignature2 = this.img;
    //   this.clear();
    //   return this.thfModal.close();
    // }
    // this.thfDialog.alert({title: 'Atenção', message: 'Remova uma das assinaturas para continuar!'});
    // this.clear();
    // return this.thfModal.close();
  }

  getShowLoading() {
    return this.show_loading;
  }
  setShowLoading(v) {
    this.show_loading = v;
    return this;
  }

  addActionsOnItens() {
    this.tableData = this.tableData.map((item) => {
      item["actions"] = ["excluir"];

      if (item["dat-entreg-epi"]) {
        item["dat-entreg-epi"] = new Date(item["dat-entreg-epi"]);
        item["dat-entreg-epi"].setDate(item["dat-entreg-epi"].getDate() + 1);
      }

      if (item["data-trans"]) {
        item["data-trans"] = new Date(item["data-trans"]);
        item["data-trans"].setDate(item["data-trans"].getDate() + 1);
      }

      if (item["dat-devol-epi"]) {
        item["dat-devol-epi"] = new Date(item["dat-devol-epi"]);
        item["dat-devol-epi"].setDate(item["dat-devol-epi"].getDate() + 1);
      }

      if (item["dat-subst-epi"]) {
        item["dat-subst-epi"] = new Date(item["dat-subst-epi"]);
        item["dat-subst-epi"].setDate(item["dat-subst-epi"].getDate() + 1);
      }

      return item;
    });
  }

  getCarregouEpis() {
    return this.carregou_epis;
  }
  setCarregouEpis(value) {
    this.carregou_epis = value;
    return this;
  }

  getEpisList() {
    return this.epis_list;
  }
  setEpisList(value) {
    this.epis_list = value;
    return this;
  }

  getFornecsList() {
    return this.fornecs_list;
  }
  setFornecsList(value) {
    this.fornecs_list = value;
    return this;
  }

  loadFornecedores(event, from_change_epi = false) {
    if (from_change_epi) {
      this.registro_selecionado["cdn-fornecedor"] = null;
    }

    if (event == null) {
      return this;
    }

    let data = {
      "tt-epi": [
        {
          cdn_estab: null,
          cdn_funcionario: null,
          cod_epi: event,
          cdn_fornecedor: null,
          dat_entreg_epi: null,
          qtd_entreg_epi: null,
          cod_unid_med_epi: null,
          dat_subst_epi: null,
        },
      ],
    };

    this.service.apiConsultaFornecEpi(
      data,
      (response) => {
        console.log(response)
        if (
          !response.items[0]["ds_fornec"].hasOwnProperty("tt-consult-forne")
        ) {
          this.thfDialog.alert({
            title: "Atenção",
            message: "Dados não encontrados para o epi informado!",
          });
          return this;
        }

        //[{label: 'Option 1', value: '1'}, {label: 'Option 2', value: '2'}]

        let fornecs = response.items[0].ds_fornec["tt-consult-forne"].map(
          (el) => {
            if (this.registro_selecionado["cdn-fornecedor"] == null) {
              this.registro_selecionado["cdn-fornecedor"] = el.cdn_fornecedor
            }

            return {
              label: el.cdn_fornecedor + " - " + el.nom_pessoa_jurid,
              value: el.cdn_fornecedor,
            };
          }
        );

        this.setFornecsList(fornecs);

        this.registro_selecionado["unid-med-epi"] =
          response.items[0].ds_fornec["tt-consult-forne"][0][
          "cod_unid_med_epi"
          ];

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

  getColumns(): Array<ThfTableColumn> {
    return [
      { property: "unid", label: "Und Lotação" },
      { property: "desc", label: "Desc. Und. Lotação", type: "string" },
      { property: "cod", label: "Cod. Cargo", type: "number" },
      { property: "des", label: "Desc. Cargo", type: "string" },
      { property: "dat", label: "Dt. Admissão", type: "string" },
    ];
  }

  getItems(): Array<any> {
    return [
      {
        unid: this.undLotac,
        desc: this.descUnid,
        cod: this.codCargo,
        des: this.desCargo,
        dat: this.dateAdm,
      },
    ];
  }

  resetForm() {
    this.paramsConsEpi["cod_epi"] = "";
    this.descEpi = "";
    this.registro_selecionado["cdn-fornecedor"] = "";
    this.registro_selecionado["unid-med-epi"] = "";
    this.registro_selecionado["dat-subst-epi"] = "";
  }

  funcDetail() {
    this.modal_type = 'funcDetail'
    this.title = 'Detalhes'
    this.modal_type = 'funcDetail'
    this.thfModal.open()
  }

  atenderVarios() {
    const selectedItems = this.thfTable.getSelectedRows()
    let epi = selectedItems.map(item => {
      return {
        "cdn-funcionario": item["cdn-funcionario"],
        "cdn-empresa": "1",
        "cdn-estab": item["cod-estabel"],
        "cod-epi": item["cod-epi"],
        "cdn-fornecedor": item["cdn-fornecedor"],
        "dat-entreg-epi": this.formatDate(item['dat-entreg-epi']),
        "tp-assinatura": 1,
        "assinatura": "",
        "usuar_trans": "",
      }
    })

    let params = {
      metodo: "atendtodosEPI",
      "paramEPI": epi
    }

    console.log(params)

    this.serviceAtend.apiCrudEpi(params, (response) => {
       console.log(response)
      if(response.items[0].hasOwnProperty("desc-erro")){
       this.thfDialog.alert({title: 'Atenção', message: response.items[0]["desc-erro"]})
       this.setShowLoading(false)
       return this
      } 
      console.log(response)
      this.setShowLoading(false)
      this.thfDialog.alert({ title: "Sucesso", message: "Atendimento realizado com sucesso!" })
      this.onQuickSearch2()
    }),
      (error) => {
        console.log("errooooooo", error);
        //TODO: informar erro com dialog
        this.setShowLoading(false);
        return null;
      }

    this.onQuickSearch2()

    /* localStorage.setItem('epi', JSON.stringify(params))

    var url_destination = "atender";
    this.router.navigate([url_destination]) */
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
