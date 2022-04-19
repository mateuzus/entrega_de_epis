(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracoes/configuracoes.component */ "./src/app/configuracoes/configuracoes.component.ts");
/* harmony import */ var _atendimento_atendimento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atendimento/atendimento.component */ "./src/app/atendimento/atendimento.component.ts");
/* harmony import */ var _biometric_crud_biometric_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biometric-crud/biometric-crud.component */ "./src/app/biometric-crud/biometric-crud.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta-epis-entregues/consulta-epis-entregues.component */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.ts");






// import { CustomersComponent } from './customers/customers.component';
// import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

var routes = [
    { path: '', redirectTo: '/epi-entregues', pathMatch: 'full' },
    { path: 'biometric-crud', component: _biometric_crud_biometric_crud_component__WEBPACK_IMPORTED_MODULE_3__["BiometricCrudComponent"] },
    { path: 'epi-entregues', component: _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_6__["ConsultaEpisEntreguesComponent"] },
    { path: 'atender', component: _atendimento_atendimento_component__WEBPACK_IMPORTED_MODULE_2__["AtendimentoComponent"] },
    { path: 'configuracoes', component: _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_1__["ConfiguracoesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thf-wrapper\">\n  <thf-toolbar [t-title]=\"titleToolbar\"></thf-toolbar>\n\n  <thf-menu [t-menus]=\"menus\"></thf-menu>\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.titleToolbar = 'Entrega de EPIs';
        this.menus = [
            { label: 'Cadastrar Biometria', link: './biometric-crud' },
            { label: 'Consultar EPIs entregues', link: './epi-entregues' },
            { label: 'Configurações', link: './configuracoes' },
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @totvs/thf-ui */ "./node_modules/@totvs/thf-ui/index.js");
/* harmony import */ var _totvs_thf_ui_services_thf_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @totvs/thf-ui/services/thf-i18n */ "./node_modules/@totvs/thf-ui/services/thf-i18n/index.js");
/* harmony import */ var _totvs_thf_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @totvs/thf-templates */ "./node_modules/@totvs/thf-templates/index.js");
/* harmony import */ var _literals_i18n_general_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./literals/i18n/general-en */ "./src/app/literals/i18n/general-en.ts");
/* harmony import */ var _literals_i18n_general_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./literals/i18n/general-pt */ "./src/app/literals/i18n/general-pt.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _biometric_crud_biometric_crud_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./biometric-crud/biometric-crud.component */ "./src/app/biometric-crud/biometric-crud.component.ts");
/* harmony import */ var _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./consulta-epis-entregues/consulta-epis-entregues.component */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.ts");
/* harmony import */ var _atendimento_atendimento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./atendimento/atendimento.component */ "./src/app/atendimento/atendimento.component.ts");
/* harmony import */ var _nebulae_angular_ble__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nebulae/angular-ble */ "./node_modules/@nebulae/angular-ble/fesm5/nebulae-angular-ble.js");
/* harmony import */ var _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./configuracoes/configuracoes.component */ "./src/app/configuracoes/configuracoes.component.ts");














// import { CustomersModule } from './customers/customers.module';






var i18nConfig = {
    default: {
        context: 'general',
        cache: true
    },
    contexts: {
        general: {
            'pt-BR': _literals_i18n_general_pt__WEBPACK_IMPORTED_MODULE_11__["generalPt"],
            'en-US': _literals_i18n_general_en__WEBPACK_IMPORTED_MODULE_10__["generalEn"]
        },
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _biometric_crud_biometric_crud_component__WEBPACK_IMPORTED_MODULE_14__["BiometricCrudComponent"],
                _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_15__["ConsultaEpisEntreguesComponent"],
                _atendimento_atendimento_component__WEBPACK_IMPORTED_MODULE_16__["AtendimentoComponent"],
                _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_18__["ConfiguracoesComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // CustomersModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]),
                _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_7__["ThfModule"],
                _totvs_thf_ui_services_thf_i18n__WEBPACK_IMPORTED_MODULE_8__["ThfI18nModule"].config(i18nConfig),
                _totvs_thf_templates__WEBPACK_IMPORTED_MODULE_9__["ThfTemplatesModule"],
                _nebulae_angular_ble__WEBPACK_IMPORTED_MODULE_17__["AngularBleModule"].forRoot(),
                _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_7__["ThfLoadingModule"],
                _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_7__["ThfFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/atendimento/atendimento.component.css":
/*!*******************************************************!*\
  !*** ./src/app/atendimento/atendimento.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0ZW5kaW1lbnRvL2F0ZW5kaW1lbnRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/atendimento/atendimento.component.html":
/*!********************************************************!*\
  !*** ./src/app/atendimento/atendimento.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thf-page-default t-title=\"Atendendimento\">\n\n    <div class=\"thf-row\">\n\n        <thf-input class=\"thf-md-3\" t-readonly=\"true\" t-label=\"Qtde a Atender\" name=\"qtde_atender\" [(ngModel)]=\"qtde_atender\" t-required=\"true\" t-disabled=\"true\">\n        </thf-input>\n\n        <thf-input class=\"thf-md-3\" t-readonly=\"true\" name=\"data_atendimento\" t-label=\"Data de atendimento\" [(ngModel)]=\"data_atendimento\" t-required=\"true\">\n        </thf-input>\n\n        <thf-switch class=\"thf-md-2\" name=\"agrupar\" t-label=\"Agrupar Lotes WMS\" t-label-off=\"Não\" t-label-on=\"Sim\" [(ngModel)]=\"agrupar_lotes_wms\">\n        </thf-switch>\n\n        <!-- <thf-switch class=\"thf-md-3\" name=\"fechar\" t-label=\"Fechar Item da Requisição?\" t-label-off=\"Não\" t-label-on=\"Sim\" [(ngModel)]=\"fechar_item_requisicao\">\n        </thf-switch>-->\n\n        <thf-button class=\"thf-md-1\" (t-click)=\"submit()\" t-label=\"Salvar\" t-type=\"primary\" t-small=\"true\">\n        </thf-button>\n\n    </div>\n\n\n    <thf-grid [t-row-actions]=\"rowActions\" [t-data]=\"data \" [t-columns]=\"columns\">>\n    </thf-grid>\n\n    <thf-loading-overlay *ngIf=\"getShowLoading()\" t-screen-lock=\"true\">\n    </thf-loading-overlay>\n\n</thf-page-default>\n"

/***/ }),

/***/ "./src/app/atendimento/atendimento.component.ts":
/*!******************************************************!*\
  !*** ./src/app/atendimento/atendimento.component.ts ***!
  \******************************************************/
/*! exports provided: AtendimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendimentoComponent", function() { return AtendimentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @totvs/thf-ui */ "./node_modules/@totvs/thf-ui/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _atendimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atendimento.service */ "./src/app/atendimento/atendimento.service.ts");
/* harmony import */ var _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consulta-epis-entregues/consulta-epis-entregues.component */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.ts");






var AtendimentoComponent = /** @class */ (function () {
    function AtendimentoComponent(thfDialog, router, activated_route, service, consultaComponente) {
        this.thfDialog = thfDialog;
        this.router = router;
        this.activated_route = activated_route;
        this.service = service;
        this.consultaComponente = consultaComponente;
        this.now = new Date();
        this.qtde_atender = "1,00";
        this.agrupar_lotes_wms = false;
        this.fechar_item_requisicao = false;
        this.data_atendimento = this.now.getFullYear() +
            "-" +
            (this.now.getMonth() + 1) +
            "-" +
            this.now.getDate();
        this.show_loading = false;
        this.dateNow = this.now.getFullYear() +
            "-" +
            (this.now.getMonth() + 1) +
            "-" +
            this.now.getDate();
        this.rowActions = {
            beforeSave: this.onBeforeSave.bind(this),
            afterSave: this.onAfterSave.bind(this),
            beforeRemove: this.onBeforeRemove.bind(this),
            afterRemove: this.onAfterRemove.bind(this),
            beforeInsert: this.onBeforeInsert.bind(this),
        };
        this.columns = [
            { property: "cod-depos", label: "Dep", readonly: true },
            { property: "cod-localiz", label: "Localização", readonly: true },
            { property: "it-codigo", label: "Cód. Estoque", readonly: true },
            { property: "lote", label: "Lote", readonly: true },
            // { property: 'validade', label: 'Validade', readonly: true},
            { property: "cod-refer", label: "Referência", readonly: true },
            { property: "qtidade-dsp", label: "Saldo Disp.", readonly: true },
            { property: "qtd-atend", label: "Qtde. Atender", required: true },
        ];
        this.data = [];
    }
    AtendimentoComponent.prototype.ngOnInit = function () {
        this.item_atender = this.getParams();
        this.qtde_atender = this.item_atender["qtd-entreg-epi"];
        this.loadData();
    };
    AtendimentoComponent.prototype.onBeforeSave = function (row, old) {
        console.log("teste aqui", row, old);
        return row.occupation !== "Engineer";
    };
    AtendimentoComponent.prototype.onAfterSave = function (row) {
        console.log("onAfterSave(new): ", row);
    };
    AtendimentoComponent.prototype.onBeforeRemove = function (row) {
        // console.log('onBeforeRemove: ', row);
        return true;
    };
    AtendimentoComponent.prototype.onAfterRemove = function (row) {
        // console.log('onAfterRemove: ', row);
    };
    AtendimentoComponent.prototype.onBeforeInsert = function (row) {
        // console.log('onBeforeInsert: ', row);
        return true;
    };
    AtendimentoComponent.prototype.submit = function () {
        var _this = this;
        var qtd_atender_total = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (parseFloat(item["qtd-atend"]) > item["qtidade-dsp"]) {
                this.thfDialog.alert({
                    title: "Atenção",
                    message: "A quantidade a atender não pode ser maior que o saldo disponível.",
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
        /* if(qtd_atender_total !=  parseFloat(this.qtde_atender.replace(',', '.'))){
          this.thfDialog.alert({title: 'Atenção', message: 'A quantidade total atendida deve ser igual a quantidade a atender.'});
          return this;
        } */
        if (!this.data_atendimento) {
            this.thfDialog.alert({
                title: "Atenção",
                message: "A Data de atendimento deve ser informada.",
            });
            return this;
        }
        this.setShowLoading(true);
        var saldo = [];
        for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
            var item = _c[_b];
            saldo.push({
                "cdn-estab": item["cod-estabel"],
                "cod-depos": item["cod-depos"],
                "cod-localiz": item["cod-localiz"],
                "cod-lote": item["lote"],
                "qtd-atend": parseFloat(item["qtd-atend"]),
            });
        }
        var tt_param = {
            "cdn-funcionario": parseInt(this.item_atender["cdn-funcionario"]),
            "ep-codigo": this.item_atender["cdn-empresa"],
            "cod-estabel": this.item_atender["cod-estabel"],
            "cod-epi": this.item_atender["cod-epi"],
            "cdn-fornecedor": parseInt(this.item_atender["cdn-fornecedor"]),
            "dat-entreg-epi": this.data_atendimento,
            "tp-assinatura": parseInt(this.item_atender["tipo_autenticacao"]),
            assinatura: this.item_atender["autenticacao"],
            usuar_trans: "",
            saldo: saldo,
        };
        var data_envio = {
            metodo: "atendimentoEPI",
            paramEPI: tt_param,
        };
        //primeiro atender
        this.service.apiCrudEpi(
        //erro está aqui de não atender correto, no data_envio
        data_envio, function (response) {
            console.log("Aqui terceiro", response);
            if (response.items[0].hasOwnProperty("cod-erro")) {
                var string_error = "";
                for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                    var error = _a[_i];
                    string_error = string_error + error["desc-erro"] + ". ";
                }
                _this.thfDialog.alert({ title: "Atenção", message: string_error });
                _this.setShowLoading(false);
                return _this;
            }
            _this.setShowLoading(false);
            _this.thfDialog.alert({
                title: "Sucesso",
                message: "Atendimento realizado com sucesso!",
            });
            _this.router.navigate(["epi-entregues"]);
            /* this.consulta.goToDelete() */
        }, function (error) {
            console.log("errooooooo", error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    AtendimentoComponent.prototype.getParams = function (property) {
        var a = this.getActivatedRoute();
        var b = a.queryParams;
        var v = b.getValue();
        if (!property) {
            return v;
        }
        if (!v.hasOwnProperty(property)) {
            return null;
        }
        return v[property];
    };
    AtendimentoComponent.prototype.getActivatedRoute = function () {
        return this.activated_route;
    };
    AtendimentoComponent.prototype.getShowLoading = function () {
        return this.show_loading;
    };
    AtendimentoComponent.prototype.setShowLoading = function (v) {
        this.show_loading = v;
        return this;
    };
    AtendimentoComponent.prototype.loadData = function () {
        var _this = this;
        this.setShowLoading(true);
        var tt_param = {
            "cdn-funcionario": parseInt(this.item_atender["cdn-funcionario"]),
            "ep-codigo": this.item_atender["cdn-empresa"],
            "cod-estabel": this.item_atender["cod-estabel"],
            "cod-epi": this.item_atender["cod-epi"],
            "cdn-fornecedor": parseInt(this.item_atender["cdn-fornecedor"]),
            "dat-entreg-epi": this.data_atendimento,
        };
        var data_envio = {
            metodo: "saldoEPI",
            paramEPI: tt_param,
        };
        this.service.apiCrudEpi(data_envio, function (response) {
            console.log("Aqui primeiro", data_envio);
            console.log("Aqui segundo", response);
            //TODO: verificar como será o retorno para tratar caso de erro
            if (response.total == 0) {
                _this.thfDialog.alert({
                    title: "Atenção",
                    message: "Não existe saldo para atendimento!",
                });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].hasOwnProperty("cod-erro")) {
                var string_error = "";
                for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                    var error = _a[_i];
                    string_error = string_error + error["desc-erro"] + ". ";
                }
                _this.thfDialog.alert({ title: "Atenção", message: string_error });
                _this.setShowLoading(false);
                return _this;
            }
            _this.data = response.items;
            _this.setShowLoading(false);
        }, function (error) {
            console.log("errooooooo", error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaEpisEntreguesComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaEpisEntreguesComponent"])
    ], AtendimentoComponent.prototype, "consulta", void 0);
    AtendimentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-atendimento",
            template: __webpack_require__(/*! ./atendimento.component.html */ "./src/app/atendimento/atendimento.component.html"),
            providers: [_consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaEpisEntreguesComponent"]],
            styles: [__webpack_require__(/*! ./atendimento.component.css */ "./src/app/atendimento/atendimento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_totvs_thf_ui__WEBPACK_IMPORTED_MODULE_2__["ThfDialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _atendimento_service__WEBPACK_IMPORTED_MODULE_4__["AtendimentoService"],
            _consulta_epis_entregues_consulta_epis_entregues_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaEpisEntreguesComponent"]])
    ], AtendimentoComponent);
    return AtendimentoComponent;
}());



/***/ }),

/***/ "./src/app/atendimento/atendimento.service.ts":
/*!****************************************************!*\
  !*** ./src/app/atendimento/atendimento.service.ts ***!
  \****************************************************/
/*! exports provided: AtendimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendimentoService", function() { return AtendimentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AtendimentoService = /** @class */ (function () {
    function AtendimentoService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url_api;
    }
    AtendimentoService.prototype.apiCrudEpi = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-crud-epi';
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    AtendimentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AtendimentoService);
    return AtendimentoService;
}());



/***/ }),

/***/ "./src/app/biometric-crud/biometric-crud.component.css":
/*!*************************************************************!*\
  !*** ./src/app/biometric-crud/biometric-crud.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    border: 1px solid #000;\n    /* top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; */\n    /* width: 100%;\n    height: 100%; */\n}\n\nimg {\n    border: 1px solid #000;\n}\n\nspan {\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvbWV0cmljLWNydWQvYmlvbWV0cmljLWNydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qjs7O2lCQUdhO0lBQ2I7b0JBQ2dCO0NBQ25COztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jpb21ldHJpYy1jcnVkL2Jpb21ldHJpYy1jcnVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgLyogdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwOyAqL1xuICAgIC8qIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgKi9cbn1cblxuaW1nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG5zcGFuIHtcbiAgICB3aWR0aDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/biometric-crud/biometric-crud.component.html":
/*!**************************************************************!*\
  !*** ./src/app/biometric-crud/biometric-crud.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thf-page-edit [t-disable-submit]=\"can_submit\" [t-title]=\"'Cadastrar biometria'\">\n\n    <form>\n        <div class=\"thf-row\">\n            <thf-input class=\"thf-md-6\" name=\"empresa\" [(ngModel)]=\"empresa\" t-label=\"Empresa\" t-required=\"true\">\n            </thf-input>\n\n            <thf-input class=\"thf-md-6\" name=\"estabel\" [(ngModel)]=\"estabel\" t-label=\"Estabelecimento\" t-required=\"true\">\n            </thf-input>\n        </div>\n\n        <div class=\"thf-row\">\n            <thf-number class=\"thf-md-6\" name=\"cdn_func\" [(ngModel)]=\"cdn_funcionario\" t-min=\"0\" t-label=\"Matrícula do funcionário\" t-required=\"true\">\n            </thf-number>\n            <!-- <thf-input class=\"thf-md-6\" name=\"cdn_func\" [(ngModel)]=\"cdn_funcionario\" t-label=\"Matrícula do funcionário\" t-required=\"true\">\n            </thf-input> -->\n            <thf-input t-disabled=\"true\" class=\"thf-md-6\" name=\"func\" [(ngModel)]=\"funcionario\" t-label=\"Nome do funcionário\" t-required=\"true\">\n            </thf-input>\n        </div>\n\n        <div class=\"thf-row\" style=\"padding-bottom: 10px;\">\n            <div class=\"thf-md-12\" style=\"text-align: right;\">\n                <thf-button t-label=\"Buscar\" (t-click)=\"searchFunc()\"> </thf-button>\n            </div>\n        </div>\n\n        <thf-button *ngIf=\"deviceConnected\" t-label=\"Ler digital\" (t-click)=\"scannerFingerPrint()\">\n        </thf-button>\n\n        <thf-button *ngIf=\"!deviceConnected\" t-label=\"Conectar ao leitor\" (t-click)=\"connectBluetoothDevice()\">\n        </thf-button>\n\n        <div class=\"thf-row\">\n            <div *ngIf=\"assignature1\" style=\"text-align: right\" class=\"thf-lg-6\">\n\n                <thf-button t-label=\"Remover assinatura\" t-type=\"danger\" (t-click)=\"removeAssignature('assignature1')\">\n                </thf-button>\n                <br><br>\n                <img [src]=\"assignature1\" style=\"max-width: 100%;height: auto;\">\n            </div>\n            <div *ngIf=\"assignature2\" style=\"text-align: right\" class=\"thf-lg-6\">\n                <thf-button t-label=\"Remover assinatura\" t-type=\"danger\" (t-click)=\"removeAssignature('assignature2')\">\n                </thf-button>\n                <br><br>\n                <img [src]=\"assignature2\" style=\"max-width: 100%;height: auto;\">\n            </div>\n        </div>\n\n        <div class=\"thf-row\">\n            <thf-button *ngIf=\"(!assignature1 || !assignature2) \" t-label=\"Adicionar assinatura\" (t-click)=\"openModalAssinatura()\">\n            </thf-button>\n        </div>\n\n    </form>\n\n    <thf-modal t-click-out=\"true\" t-size=\"sm\" t-title=\"Adicionar assinatura\" [t-primary-action]=\"getPrimaryAction()\" [t-secondary-action]=\"getSecondaryAction()\">\n        <div>\n            <canvas #sigPad width=\"700\" height=\"350\" (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"></canvas>\n            <br/>\n            <thf-button t-label=\"Limpar\" (t-click)=\"clear()\"> </thf-button>\n            <!-- <thf-button t-label=\"Adicionar\" (t-click)=\"saveImage()\"> </thf-button> -->\n            <br/>\n            <!-- <img *ngIf=\"img\" [src]=\"img\"> -->\n            <br/>\n        </div>\n\n\n        <!-- <ul *ngFor=\"let extra of extraInformation?.extras\">\n            <li class=\"thf-font-text\">{{ extra }}</li>\n            <hr>\n        </ul> -->\n\n    </thf-modal>\n\n    <thf-loading-overlay *ngIf=\"getShowLoading()\" t-screen-lock=\"true\">\n    </thf-loading-overlay>\n\n</thf-page-edit>"

/***/ }),

/***/ "./src/app/biometric-crud/biometric-crud.component.ts":
/*!************************************************************!*\
  !*** ./src/app/biometric-crud/biometric-crud.component.ts ***!
  \************************************************************/
/*! exports provided: BiometricCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricCrudComponent", function() { return BiometricCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebulae_angular_ble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebulae/angular-ble */ "./node_modules/@nebulae/angular-ble/fesm5/nebulae-angular-ble.js");
/* harmony import */ var _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @totvs/thf-ui */ "./node_modules/@totvs/thf-ui/index.js");
/* harmony import */ var _biometric_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biometric-crud.service */ "./src/app/biometric-crud/biometric-crud.service.ts");





// import Sblendid from "@sblendid/sblendid";
var BiometricCrudComponent = /** @class */ (function () {
    function BiometricCrudComponent(bluetoothService, service, thfDialog) {
        this.bluetoothService = bluetoothService;
        this.service = service;
        this.thfDialog = thfDialog;
        this.can_submit = false;
        this.deviceConnected = false;
        this.show_loading = false;
        // Current device battery level
        this.batteryLevel = '';
        this.isDrawing = false;
        this.assignature1 = null;
        this.assignature2 = null;
        this.biometria1 = null;
        this.biometria2 = null;
        this.biometria3 = null;
        this.biometria4 = null;
        this.biometria5 = null;
        this.orientation = _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfTagOrientation"].Horizontal;
    }
    BiometricCrudComponent.prototype.ngOnInit = function () {
        this.restore();
        this.empresa = localStorage.getItem('ent_epi_empresa') || '';
        this.estabel = localStorage.getItem('ent_epi_estabelecimento') || '';
        // device is null means than the device connection has been lost)
        // this.bluetoothService.getDevice$().subscribe(device => {
        //   this.deviceConnected = device? true : false;
        // });
        console.log(this.sigPad);
        this.sigPadElement = this.sigPad.nativeElement;
        this.context = this.sigPadElement.getContext('2d');
        this.context.strokeStyle = '#3742fa';
    };
    BiometricCrudComponent.prototype.restore = function () {
        this.empresa = '';
        this.estabel = '';
        this.funcionario = null;
    };
    BiometricCrudComponent.prototype.validaSave = function () {
        if (this.empresa == '' || !this.empresa) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe uma empresa para continuar!' });
            return false;
        }
        if (this.estabel == '' || !this.estabel) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe um estabelecimento para continuar!' });
            return false;
        }
        if (this.cdn_funcionario == null || !this.cdn_funcionario) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe uma matrícula para continuar!' });
            return false;
        }
        //TODO: Adicionar para ver também se alguma leitura de digital foi inserida
        if (!this.assignature1 && !this.assignature2) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Adicione ao menos uma assinatura para continuar!' });
            return false;
        }
        return true;
    };
    BiometricCrudComponent.prototype.save = function (clear) {
        var _this = this;
        if (!this.validaSave()) {
            return this;
        }
        this.setShowLoading(true);
        var data = {
            "metodo": "cadastroFunc",
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
        this.service.apiCrudFunc(data, function (response) {
            _this.setShowLoading(false);
            if (response.items[0].hasOwnProperty('cod-erro')) {
                var string_error = '';
                for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                    var error = _a[_i];
                    string_error = string_error + error['desc-erro'] + '. ';
                }
                _this.thfDialog.alert({ title: 'Atenção', message: string_error });
                return _this;
            }
            if (response.items[0].hasOwnProperty('Sucesso')) {
                _this.thfDialog.alert({ title: 'Sucesso', message: 'Registro salvo com sucesso!' });
                if (clear === true) {
                    _this.limpar();
                }
                return _this;
            }
            _this.thfDialog.alert({ title: 'Atenção', message: 'Algo deu errado ao salvar o registro!' });
            return _this;
        }, function (error) {
            console.log('errooooooo', error);
            _this.setShowLoading(false);
            //TODO: informar erro com dialog
            return _this;
        });
    };
    BiometricCrudComponent.prototype.saveNew = function () {
        // console.log('método de salvar e limpar para cadastrar novo');
        return this.save(true);
    };
    BiometricCrudComponent.prototype.limpar = function () {
        this.empresa = '';
        this.estabel = '';
        this.cdn_funcionario = null;
        this.funcionario = null;
        this.assignature1 = null;
        this.assignature2 = null;
        this.img = null;
        return this;
    };
    BiometricCrudComponent.prototype.getDevice = function () {
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
        this.bluetoothService.connectDevice$().subscribe(function (res) {
            console.log("jksdfbdshfs", res);
        });
        this.bluetoothService.getBatteryLevel$().subscribe(function (res) {
            console.log('fjkdsfsdbfdsjyjjsujsusjsj', res);
            // this.batteryLevel = res+"";
        });
    };
    BiometricCrudComponent.prototype.scannerFingerPrint = function () {
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
    };
    BiometricCrudComponent.prototype.getCanonicalUUID = function (uuid) {
        if (typeof uuid === "number")
            uuid = uuid.toString(16);
        uuid = uuid.toLowerCase();
        if (uuid.length <= 8)
            uuid = ("00000000" + uuid).slice(-8) + "-0000-1000-8000-00805f9b34fb";
        if (uuid.length === 32)
            uuid = uuid.match(/^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/).splice(1).join("-");
        return uuid;
    };
    BiometricCrudComponent.prototype.connectDevice = function () {
        var options = {};
        options.acceptAllDevices = true;
        navigator.bluetooth.requestDevice(options
        // {filters: [{services: ['battery_service']}]}
        )
            .then(function (device) {
            console.log('> Name:             ' + device.name);
            console.log('> Id:               ' + device.id);
            console.log('> Connected:        ' + device.gatt.connected);
            console.log('Connecting to GATT Server...');
            return device.gatt.connect();
        })
            .then(function (server) {
            console.log('Getting Service...');
            // return server.getPrimaryService('battery_service');
            // var service_uuid = this.getCanonicalUUID(0x30);
            // console.log(service_uuid);
            // var service_uuid = this.getCanonicalUUID(0x1800);
            // console.log(service_uuid);
            // return server.getPrimaryService("0000180a-0000-1000-8000-00805f9b34fb");
            return server.getPrimaryService("00001800-0000-1000-8000-00805f9b34fb");
        })
            .then(function (service) {
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
            .then(function (characteristic) {
            console.log('Reading Characteristic...');
            return characteristic.readValue();
        })
            .then(function (value) {
            console.log(value);
            var batteryLevel = value.getUint8(0);
            console.log('> Characteristic value is ' + batteryLevel + '');
        })
            .catch(function (error) {
            console.log('Argh! ' + error);
        });
    };
    //stablish a connection between the browser and a bluetooth device
    BiometricCrudComponent.prototype.connectToDevice = function () {
        this.bluetoothService.connectDevice$().subscribe(function (res) {
            console.log("jksdfbdshfs", res);
            // this.deviceConnected = res? true : false;
        });
    };
    //get the current device battery level
    BiometricCrudComponent.prototype.getBatteryLevel = function () {
        var _this = this;
        this.bluetoothService.getBatteryLevel$().subscribe(function (res) {
            _this.batteryLevel = res + "";
        });
    };
    BiometricCrudComponent.prototype.novoTeste = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var port;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.serial.requestPort()];
                    case 1:
                        port = _a.sent();
                        console.log(port);
                        return [2 /*return*/];
                }
            });
        });
    };
    BiometricCrudComponent.prototype.connectBluetoothDevice = function () {
        var _this = this;
        console.log('====================>>>>>>>>>>>>>>>>');
        navigator.bluetooth.requestDevice({
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
            .then(function (device) {
            console.log('> Name:             ' + device.name);
            console.log('> Id:               ' + device.id);
            console.log('> Connected:        ' + device.gatt.connected);
            console.log('Connecting to GATT Server...');
            return device.gatt.connect();
        })
            .then(function (server) {
            console.log('Getting Service...');
            return server.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
        })
            .then(function (service) {
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
            .then(function (characteristic) {
            /*      console.log('Reading VALUE...', characteristic);
                  return characteristic.readValue();*/
            console.log('writing VALUE...', characteristic);
            var value = Uint8Array.of(0x46, 0x54, 0x00, 0x00, 0x21, 0x00, 0x00, _this.calcCheckSum([], 7 + 0));
            // console.log('================================== ',characteristic.writeValueWithResponse(value));
            // console.log('***** Valor anteseeeeeee: ' , value); 
            return characteristic.writeValueWithResponse(value).then(function (_) {
                console.log('***** Valor Lido value: ', value);
                console.log('***** Valor Lido characteristic: ', characteristic);
            });
        })
            .then(function (value) {
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
            .catch(function (error) {
            console.log('Argh! ' + error);
        });
        // function handleCharacteristicValueChanged(event) {
        //   console.log(event.target.value.getUint8(0) + '%');     
        // } 
    };
    BiometricCrudComponent.prototype.getAlertLevel = function (value) {
        var v = value.getUint8(0);
        return v;
    };
    BiometricCrudComponent.prototype.openModalAssinatura = function (value, row, type, title) {
        this.thfModal.open();
    };
    BiometricCrudComponent.prototype.onMouseUp = function (e) {
        this.isDrawing = false;
    };
    BiometricCrudComponent.prototype.onMouseDown = function (e) {
        this.isDrawing = true;
        var coords = this.relativeCoords(e);
        this.context.moveTo(coords.x, coords.y);
    };
    BiometricCrudComponent.prototype.onMouseMove = function (e) {
        if (this.isDrawing) {
            var coords = this.relativeCoords(e);
            this.context.lineTo(coords.x, coords.y);
            this.context.stroke();
        }
    };
    BiometricCrudComponent.prototype.relativeCoords = function (event) {
        var bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        return { x: x, y: y };
    };
    BiometricCrudComponent.prototype.calcCheckSum = function (buffer, size) {
        var sum = 0;
        for (var i = 0; i < size; i++) {
            sum = sum + buffer[i];
        }
        return (sum & 0xffff);
    };
    BiometricCrudComponent.prototype.clear = function () {
        this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
        this.context.beginPath();
        this.img = null;
        return this;
    };
    BiometricCrudComponent.prototype.saveImage = function () {
        this.img = this.sigPadElement.toDataURL("image/png");
        if (!this.assignature1) {
            this.assignature1 = this.img;
            this.clear();
            return this.thfModal.close();
        }
        if (!this.assignature2) {
            this.assignature2 = this.img;
            this.clear();
            return this.thfModal.close();
        }
        this.thfDialog.alert({ title: 'Atenção', message: 'Remova uma das assinaturas para continuar!' });
        this.clear();
        return this.thfModal.close();
    };
    BiometricCrudComponent.prototype.removeAssignature = function (assignature) {
        this[assignature] = null;
        return this;
    };
    BiometricCrudComponent.prototype.getPrimaryAction = function () {
        var _this = this;
        console.log("SALVAR IMAGEM");
        return {
            label: 'Adicionar',
            danger: false,
            action: function () {
                _this;
                _this.saveImage();
            }
        };
    };
    BiometricCrudComponent.prototype.getSecondaryAction = function () {
        console.log("Fechar modal");
    };
    BiometricCrudComponent.prototype.changeEvent = function (event) {
        console.log(event);
    };
    BiometricCrudComponent.prototype.validaSearch = function () {
        if (this.empresa == '' || !this.empresa) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe uma empresa para continuar!' });
            return false;
        }
        if (this.estabel == '' || !this.estabel) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe um estabelecimento para continuar!' });
            return false;
        }
        if (this.cdn_funcionario == null || !this.cdn_funcionario) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe uma matrícula para continuar!' });
            return false;
        }
        if (!Number.isInteger(this.cdn_funcionario)) {
            this.thfDialog.alert({ title: 'Atenção', message: 'A matrícula deve ser um número inteiro!' });
            return false;
        }
        return true;
    };
    BiometricCrudComponent.prototype.searchFunc = function () {
        var _this = this;
        if (!this.validaSearch()) {
            return this;
        }
        this.setShowLoading(true);
        var data = {
            "metodo": "consultaFunc",
            "paramFunc": {
                "cdn-funcionario": this.cdn_funcionario,
                "cod-estabel": this.estabel,
                "ep-codigo": this.empresa
            }
        };
        this.service.apiCrudFunc(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Funcionário não encontrado!' });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].hasOwnProperty('cod-erro')) {
                var string_error = '';
                for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                    var error = _a[_i];
                    string_error = string_error + error['desc-erro'] + '. ';
                }
                _this.thfDialog.alert({ title: 'Atenção', message: string_error });
                _this.setShowLoading(false);
                return _this;
            }
            _this.funcionario = response.items[0]['nome-func'];
            _this.assignature1 = response.items[0]['assinatura1'] == '' ? null : response.items[0]['assinatura1'];
            _this.assignature2 = response.items[0]['assinatura2'] == '' ? null : response.items[0]['assinatura2'];
            _this.biometria1 = response.items[0]['biometria1'] == '' ? null : response.items[0]['biometria1'];
            _this.biometria2 = response.items[0]['biometria2'] == '' ? null : response.items[0]['biometria2'];
            _this.biometria3 = response.items[0]['biometria3'] == '' ? null : response.items[0]['biometria3'];
            _this.biometria4 = response.items[0]['biometria4'] == '' ? null : response.items[0]['biometria4'];
            _this.biometria5 = response.items[0]['biometria5'] == '' ? null : response.items[0]['biometria5'];
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    BiometricCrudComponent.prototype.getShowLoading = function () { return this.show_loading; };
    BiometricCrudComponent.prototype.setShowLoading = function (v) {
        this.show_loading = v;
        return this;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfModalComponent"])
    ], BiometricCrudComponent.prototype, "thfModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sigPad'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BiometricCrudComponent.prototype, "sigPad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BiometricCrudComponent.prototype, "onMouseUp", null);
    BiometricCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-biometric-crud',
            template: __webpack_require__(/*! ./biometric-crud.component.html */ "./src/app/biometric-crud/biometric-crud.component.html"),
            styles: [__webpack_require__(/*! ./biometric-crud.component.css */ "./src/app/biometric-crud/biometric-crud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebulae_angular_ble__WEBPACK_IMPORTED_MODULE_2__["BluetoothService"],
            _biometric_crud_service__WEBPACK_IMPORTED_MODULE_4__["BiometricCrudService"],
            _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfDialogService"]])
    ], BiometricCrudComponent);
    return BiometricCrudComponent;
}());



/***/ }),

/***/ "./src/app/biometric-crud/biometric-crud.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/biometric-crud/biometric-crud.service.ts ***!
  \**********************************************************/
/*! exports provided: BiometricCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricCrudService", function() { return BiometricCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var BiometricCrudService = /** @class */ (function () {
    function BiometricCrudService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url_api;
    }
    BiometricCrudService.prototype.apiCrudFunc = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-crud-func';
        // let headers_send = new HttpHeaders( 
        //   { 
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    BiometricCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BiometricCrudService);
    return BiometricCrudService;
}());



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#salvar{\r\n  margin-left: 8px;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n#content\r\n{\r\n  color: #4a5c60;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY29lcy9jb25maWd1cmFjb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0NBQzdCOztBQUVEOztFQUVFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmFjb2VzL2NvbmZpZ3VyYWNvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzYWx2YXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjb250ZW50XHJcbntcclxuICBjb2xvcjogIzRhNWM2MDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.html":
/*!************************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thf-page-default t-title=\"Configurações\">\n      <div class=\"thf-row\" id=\"content\">\n        <div class=\"col-sm-6\">\n          <label>Empresa padrão</label>\n          <input type=\"text\" class=\"form-control\" name=\"empresa\" id=\"empresa\" value=\"1\" [(ngModel)]=\"empresa\">\n        </div>\n\n        <div class=\"col-sm-6\">\n          <label>Estabelecimento padrão</label>\n          <input type=\"text\" class=\"form-control\" name=\"estabelecimento\" id=\"estabelecimento\" value=\"1\" [(ngModel)]=\"estabelecimento\">\n        </div>\n      </div>\n\n\n\n    <div class=\"thf-row\" id=\"salvar\">\n        <thf-button class=\"thf-md-3\" t-label=\"Salvar\" (t-click)=\"salvar()\">\n        </thf-button>\n    </div>\n</thf-page-default>\n"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfiguracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function() { return ConfiguracoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @totvs/thf-ui */ "./node_modules/@totvs/thf-ui/index.js");




var ConfiguracoesComponent = /** @class */ (function () {
    function ConfiguracoesComponent(router, thfDialog) {
        this.router = router;
        this.thfDialog = thfDialog;
        this.empresa = "1";
        this.estabelecimento = "1";
    }
    ConfiguracoesComponent.prototype.ngOnInit = function () {
        this.empresa = localStorage.getItem('ent_epi_empresa') || '1';
        this.estabelecimento = localStorage.getItem('ent_epi_estabelecimento') || '1';
    };
    ConfiguracoesComponent.prototype.salvar = function () {
        localStorage.setItem('ent_epi_empresa', this.empresa);
        localStorage.setItem('ent_epi_estabelecimento', this.estabelecimento);
        this.thfDialog.alert({ title: 'Sucesso', message: 'Configurações atualizadas com sucesso!' });
        this.router.navigate(['epi-entregues']);
    };
    ConfiguracoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracoes',
            template: __webpack_require__(/*! ./configuracoes.component.html */ "./src/app/configuracoes/configuracoes.component.html"),
            styles: [__webpack_require__(/*! ./configuracoes.component.css */ "./src/app/configuracoes/configuracoes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfDialogService"]])
    ], ConfiguracoesComponent);
    return ConfiguracoesComponent;
}());



/***/ }),

/***/ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/consulta-epis-entregues/consulta-epis-entregues.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  border: 1px solid #000;\n  /* top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; */\n  /* width: 100%;\n    height: 100%; */\n}\n\nimg {\n  border: 1px solid #000;\n}\n\nspan {\n  width: 300px;\n}\n\n.divFunc {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tableDetails{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.tableItems{\n  width: 100%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.subtitle {\n  color: #0c9abe;\n  font-size: 20px;\n  margin-right: 20px;\n}\n\n.descEpi{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.but{\n  margin-top: 32px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGEtZXBpcy1lbnRyZWd1ZXMvY29uc3VsdGEtZXBpcy1lbnRyZWd1ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qjs7O2lCQUdlO0VBQ2Y7b0JBQ2tCO0NBQ25COztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRhLWVwaXMtZW50cmVndWVzL2NvbnN1bHRhLWVwaXMtZW50cmVndWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAvKiB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7ICovXG4gIC8qIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgKi9cbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuc3BhbiB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmRpdkZ1bmMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlRGV0YWlsc3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGVJdGVtc3tcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMGM5YWJlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmRlc2NFcGl7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/consulta-epis-entregues/consulta-epis-entregues.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thf-page-dynamic-search\n  t-title=\"Consulta EPI Entregue\"\n  [t-filters]=\"filters\"\n  (t-change-disclaimers)=\"onChangeDisclaimers($event)\"\n  (t-quick-search)=\"onQuickSearch($event)\"\n  (t-advanced-search)=\"onAdvancedSearch($event, true)\"\n>\n  <thf-button\n    t-type=\"primary\"\n    [hidden]=\"!nameFunc\"\n    t-label=\"Incluir\"\n    (t-click)=\"abrirModalAdd()\"\n  >\n  </thf-button>\n\n  <div class=\"thf-row divFunc\">\n    <div id=\"subtitle\" class=\"subtitle\">{{ cdnFunc }} - {{ nameFunc }}</div>\n  </div>\n  <div class=\"thf-row tableDetails\">\n    <thf-table\n      class=\"tableItems\"\n      [hidden]=\"!nameFunc\"\n      [t-columns]=\"columns\"\n      [t-items]=\"items\"\n      t-sort=\"true\"\n      [t-striped]=\"true\"\n    >\n    </thf-table>\n  </div>\n\n  <thf-table\n    t-checkbox\n    t-single-select\n    t-sort=\"true\"\n    t-striped=\"true\"\n    [t-columns]=\"tableColumns\"\n    [t-items]=\"tableData\"\n  >\n  </thf-table>\n\n  <thf-modal\n    t-click-out=\"true\"\n    t-size=\"xl\"\n    t-title=\"{{ title }}\"\n    [t-primary-action]=\"getPrimaryAction()\"\n    [t-secondary-action]=\"getSecondaryAction()\"\n  >\n    <div [style.display]=\"modal_type != 'getAssignature' ? 'block' : 'none'\">\n      <div>\n        <div *ngIf=\"modal_type == 'detail' || modal_type == 'delete'\">\n          <div *ngIf=\"registro_selecionado\">\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"cdn-funcionario\"\n                [(ngModel)]=\"registro_selecionado['cdn-funcionario']\"\n                t-label=\"CDN Funcionário\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"cdn-empresa\"\n                [(ngModel)]=\"registro_selecionado['cdn-empresa']\"\n                t-label=\"CDN Empresa\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"cod-estabel\"\n                [(ngModel)]=\"codEstabelecimento\"\n                t-label=\"COD. Estabelecimento\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-2\"\n                name=\"cod-epi\"\n                [(ngModel)]=\"registro_selecionado['cod-epi']\"\n                t-label=\"Cód. EPI\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              ></thf-input>\n\n              <thf-input\n                class=\"thf-md-6\"\n                name=\"desc-epi\"\n                [(ngModel)]=\"registro_selecionado['desc-epi']\"\n                t-label=\"EPI\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"cdn-fornecedor\"\n                [(ngModel)]=\"registro_selecionado['cdn-fornecedor']\"\n                t-label=\"CDN Fornecedor\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-6\"\n                name=\"dat-entreg-epi\"\n                t-label=\"Data de entrega\"\n                [(ngModel)]=\"registro_selecionado['dat-entreg-epi']\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-radio-group\n                class=\"thf-md-6\"\n                name=\"tipo-autentic\"\n                t-label=\"Meio de autenticação\"\n                [t-options]=\"authentication_type_options\"\n                t-disabled=\"true\"\n                [(ngModel)]=\"registro_selecionado['tipo-autentic']\"\n                t-required=\"true\"\n              >\n              </thf-radio-group>\n            </div>\n            <div class=\"thf-row\">\n              <div\n                *ngIf=\"registro_selecionado['autenticacao-1']\"\n                style=\"text-align: right\"\n                class=\"thf-lg-6\"\n              >\n                <img\n                  [src]=\"registro_selecionado['autenticacao-1']\"\n                  style=\"max-width: 100%; height: auto\"\n                />\n              </div>\n              <div\n                *ngIf=\"registro_selecionado['autenticacao-2']\"\n                style=\"text-align: right\"\n                class=\"thf-lg-6\"\n              >\n                <img\n                  [src]=\"registro_selecionado['autenticacao-2']\"\n                  style=\"max-width: 100%; height: auto\"\n                />\n              </div>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"cod-usuar-trans\"\n                [(ngModel)]=\"registro_selecionado['cod-usuar-trans']\"\n                t-label=\"Usuário Transferência\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"nom-usu-trans\"\n                [(ngModel)]=\"registro_selecionado['nom-usu-trans']\"\n                t-label=\"Usuário Transferência\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-datepicker\n                class=\"thf-md-3\"\n                name=\"data-trans\"\n                t-label=\"Data Transferência\"\n                [(ngModel)]=\"registro_selecionado['data-trans']\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-datepicker>\n\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"hora-trans\"\n                [(ngModel)]=\"registro_selecionado['hora-trans']\"\n                t-label=\"Hora da transferência\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"qtd-entreg-epi\"\n                [(ngModel)]=\"registro_selecionado['qtd-entreg-epi']\"\n                t-label=\"Quantidade entregue\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"log-epi-novo\"\n                [(ngModel)]=\"registro_selecionado['log-epi-novo']\"\n                t-label=\"EPI Novo\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-4\"\n                name=\"unid-med-epi\"\n                [(ngModel)]=\"registro_selecionado['unid-med-epi']\"\n                t-label=\"Unidade de medida Epi\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n            </div>\n            <div class=\"thf-row\">\n              <thf-datepicker\n                class=\"thf-md-3\"\n                name=\"dat-devol-epi\"\n                t-label=\"Data Devolução\"\n                [(ngModel)]=\"registro_selecionado['dat-devol-epi']\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-datepicker>\n\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"qtd-devol-epi\"\n                [(ngModel)]=\"registro_selecionado['qtd-devol-epi']\"\n                t-label=\"Quantidade Devolução\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"dat-subst-epi\"\n                t-label=\"Data Substituição\"\n                [(ngModel)]=\"registro_selecionado['dat-subst-epi']\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-3\"\n                name=\"assin-recib-epi\"\n                [(ngModel)]=\"registro_selecionado['assin-recib-epi']\"\n                t-label=\"Assina Recebimento\"\n                t-disabled=\"true\"\n                t-required=\"true\"\n              >\n              </thf-input>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"modal_type == 'add' || modal_type == 'edit'\">\n          <div *ngIf=\"registro_selecionado\">\n            <div class=\"thf-row\">\n              <thf-number\n                class=\"thf-md-6\"\n                name=\"cdn-funcionario\"\n                [(ngModel)]=\"cdnFunc\"\n                t-label=\"CDN Funcionário\"\n                t-required=\"true\"\n                [t-disabled]=\"modal_type == 'edit'\"\n              >\n              </thf-number>\n              <thf-input\n                class=\"thf-md-6\"\n                name=\"cod-estabel\"\n                [(ngModel)]=\"codEstabelecimento\"\n                t-label=\"COD. Estabelecimento\"\n                t-required=\"true\"\n                [t-disabled]=\"modal_type == 'edit'\"\n              >\n              </thf-input>\n            </div>\n\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-4\"\n                t-label=\"Cod. EPI\"\n                [(ngModel)]=\"registro_selecionado['cod-epi']\"\n              >\n              </thf-input>\n\n              <thf-button\n                class=\"thf-md-2 but\"\n                t-label=\"Pesquisar\"\n                (t-click)=\"postEpiDesc()\"\n              >\n              </thf-button>\n\n              <thf-input\n                class=\"thf-md-6\"\n                t-disabled=\"true\"\n                t-label=\"Desc. Epi Atual\"\n                [(ngModel)]=\"descEpi\"\n                [hidden]=\"modal_type == 'edit'\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-6\"\n                t-disabled=\"true\"\n                t-label=\"Desc. Epi Atual\"\n                [(ngModel)]=\"registro_selecionado['desc-epi']\"\n                [hidden]=\"modal_type == 'add'\"\n              >\n              </thf-input>\n\n              <thf-input\n                class=\"thf-md-12\"\n                t-disabled=\"true\"\n                t-label=\"Desc. Epi Atualizado\"\n                [(ngModel)]=\"descEpi\"\n                [hidden]=\"modal_type == 'add'\"\n              >\n              </thf-input>\n\n\n\n              <thf-select\n                class=\"thf-md-12\"\n                name=\"cdn-fornecedor\"\n                [(ngModel)]=\"registro_selecionado['cdn-fornecedor']\"\n                t-label=\"CDN Fornecedor\"\n                t-required=\"true\"\n                [t-options]=\"fornecs_list\"\n                [t-disabled]=\"\n                  getFornecsList().length == 0 || modal_type == 'edit'\n                \"\n              >\n              </thf-select>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-6\"\n                name=\"dat-entreg-epi\"\n                t-label=\"Data de entrega\"\n                [(ngModel)]=\"dateNow\"\n                t-required=\"true\"\n                [t-disabled]=\"false\"\n              >\n              </thf-input>\n              <!-- <thf-input class=\"thf-md-6\" name=\"dat-entreg-epi\" t-label=\"Data de entrega\" [(ngModel)]=\"registro_selecionado['dat-entreg-epi']\" t-required=\"true\" [t-disabled]=\"modal_type == 'edit'\" t-mask=\"39/19/9999\" >\n                            </thf-input> -->\n              <thf-number\n                class=\"thf-md-6\"\n                name=\"qtd-entreg-epi\"\n                [(ngModel)]=\"qtd\"\n                t-label=\"Quantidade entregue\"\n                t-required=\"true\"\n              >\n              </thf-number>\n            </div>\n            <div class=\"thf-row\">\n              <thf-input\n                class=\"thf-md-6\"\n                name=\"unid-med-epi\"\n                [(ngModel)]=\"registro_selecionado['unid-med-epi']\"\n                t-label=\"Unidade de medida Epi\"\n                t-required=\"true\"\n                t-disabled=\"true\"\n              >\n              </thf-input>\n              <thf-input\n                class=\"thf-md-6\"\n                t-mask=\"dd/mm/YYYY\"\n                name=\"dat-subst-epi\"\n                t-label=\"Data Substituição\"\n                [(ngModel)]=\"registro_selecionado['dat-subst-epi']\"\n                t-required=\"false\"\n              >\n              </thf-input>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"modal_type == 'attend'\">\n          <thf-radio-group\n            name=\"radioGroupBasic\"\n            t-label=\"Meio de autenticação\"\n            [t-options]=\"authentication_type_options\"\n            t-required=\"true\"\n            [(ngModel)]=\"authentication_type\"\n          >\n          </thf-radio-group>\n        </div>\n      </div>\n    </div>\n    <div [style.display]=\"modal_type == 'getAssignature' ? 'block' : 'none'\">\n      <canvas\n        #sigPadAssignature\n        width=\"700\"\n        height=\"350\"\n        (mousedown)=\"onMouseDown($event)\"\n        (mousemove)=\"onMouseMove($event)\"\n      ></canvas>\n      <br />\n      <div class=\"thf-row\">\n        <div *ngIf=\"assignature1\" class=\"thf-lg-6\">\n          <br />\n          <h2>Assinatura 1</h2>\n          <br />\n          <img [src]=\"assignature1\" style=\"max-width: 100%; height: auto\" />\n        </div>\n        <div *ngIf=\"assignature2\" class=\"thf-lg-6\">\n          <br />\n          <h2>Assinatura 2</h2>\n          <br />\n          <img [src]=\"assignature2\" style=\"max-width: 100%; height: auto\" />\n        </div>\n      </div>\n      <br />\n      <thf-button t-label=\"Limpar\" (t-click)=\"clear()\"> </thf-button>\n      <thf-button t-label=\"Comparar\" (t-click)=\"compareImage()\"> </thf-button>\n      <br />\n      <!-- <img *ngIf=\"img\" [src]=\"img\"> -->\n      <br />\n    </div>\n\n    <!-- <ul *ngFor=\"let extra of extraInformation?.extras\">\n      <li class=\"thf-font-text\">{{ extra }}</li>\n      <hr>\n    </ul> -->\n  </thf-modal>\n\n  <thf-loading-overlay *ngIf=\"getShowLoading()\" t-screen-lock=\"true\">\n  </thf-loading-overlay>\n</thf-page-dynamic-search>\n"

/***/ }),

/***/ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/consulta-epis-entregues/consulta-epis-entregues.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConsultaEpisEntreguesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaEpisEntreguesComponent", function() { return ConsultaEpisEntreguesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @totvs/thf-ui */ "./node_modules/@totvs/thf-ui/index.js");
/* harmony import */ var _consulta_epis_entregues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta-epis-entregues.service */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.service.ts");





var authentication_type_default = '2';
var ConsultaEpisEntreguesComponent = /** @class */ (function () {
    function ConsultaEpisEntreguesComponent(service, router, thfDialog) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.thfDialog = thfDialog;
        this.carregou_epis = false;
        this.epis_list = [];
        this.fornecs_list = [];
        this.now = new Date();
        this.dateNow = this.now.getFullYear() + '-' + (this.now.getMonth() + 1) + '-' + this.now.getDate();
        this.qtd = 1;
        this.url_get_epis = '';
        this.modal_type = 'getAssignature';
        this.cdnEmp = '';
        this.nameFunc = '';
        this.cdnFunc = '';
        this.codCargo = '';
        this.codEstab = '';
        this.dateAdm = '';
        this.desCargo = '';
        this.descUnid = '';
        this.undLotac = '';
        this.codEstabelecimento = "1";
        this.descEpi = '';
        this.codEpi = '';
        this.authentication_type = authentication_type_default;
        this.authentication_type_options = [{ label: 'Assinatura', value: 1 }, { label: 'Digital', value: 2 }];
        this.isDrawing = false;
        this.show_loading = false;
        /* public readonly actions: Array<ThfPageAction> = [
          { label: 'Incluir', action: this.abrirModalAdd.bind(this), disabled: false }
        ]; */
        this.modal_primary_action_attend = {
            label: 'Atender',
            danger: false,
            action: function () {
                _this;
                _this.goToGetAuthentication();
            }
        };
        this.modal_secondary_action_attend = {
            label: 'Fechar',
            danger: true,
            action: function () {
                _this.thfModal.close();
            }
        };
        this.modal_primary_action_detalhe = {
            label: 'Fechar',
            danger: false,
            action: function () {
                _this;
                _this.thfModal.close();
            }
        };
        this.modal_primary_action_getAssignature = {
            label: 'Atender',
            danger: false,
            action: function () {
                _this;
                _this.goToAttend();
            }
        };
        this.modal_primary_action_salvar = {
            label: 'Salvar',
            danger: false,
            action: function () {
                _this;
                _this.goToSave();
            }
        };
        this.modal_primary_action_add = {
            label: 'Salvar',
            danger: false,
            action: function () {
                _this;
                _this.goToAdd();
                _this.thfModal.close();
                _this.onQuickSearch2();
                _this.resetForm();
            }
        };
        this.modal_primary_action_detalhes = {
            label: 'Detalhes',
            danger: false,
            action: function () {
                _this;
                _this.thfModal.open();
            }
        };
        this.modal_secondary_action_cancelar = {
            label: 'Cancelar',
            danger: true,
            action: function () {
                _this.thfModal.close();
            }
        };
        this.modal_primary_action_excluir = {
            label: 'Excluir',
            danger: false,
            action: function () {
                _this;
                _this.goToDelete();
                _this.thfModal.close();
                _this.onQuickSearch2();
            }
        };
        this.modal_secondary_action_excluir = {
            label: 'Cancelar',
            danger: true,
            action: function () {
                _this.thfModal.close();
            }
        };
        this.situationOptions = [];
        // public readonly actions: Array<ThfPageAction> = [
        //   { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) }
        // ];
        this.filters = [
            // { property: 'situacao', label: 'Situação', options: this.situationOptions, gridColumns: 12 },
            // { property: 'cod_epi', label: 'Código da EPI', gridColumns: 4 },
            // { property: 'desc_epi', label: 'EPI', gridColumns: 8 },
            { property: 'cdn-empresa', label: 'CDN empresa', gridColumns: 6 },
            { property: 'cod-estabel', label: 'CDN Estabelecimento', gridColumns: 6 },
            { property: 'cdn-funcionario', label: 'Matrícula do funcionário', gridColumns: 6 },
            { property: 'nome-func', label: 'Nome do funcionário', gridColumns: 6 },
            {
                property: 'entrega-pend', label: 'Entrega pendente', options: [
                    { value: true, label: 'Sim' },
                    { value: false, label: 'Não' }
                ], gridColumns: 6
            },
            { property: 'dt-ent-ini', label: 'Data entrada início', gridColumns: 6, type: 'date' },
            { property: 'dt-ent-fim', label: 'Data entrada fim', gridColumns: 6, type: 'date' },
            { property: 'epi-ini', label: 'EPI início', gridColumns: 6 },
            { property: 'epi-fim', label: 'EPI fim', gridColumns: 6 },
        ];
        // this.url_get_epis = this.service.getBaseUrl() + 'api-consult-epi';
    }
    ConsultaEpisEntreguesComponent.prototype.ngOnInit = function () {
        this.loadEpis();
        this.sigPadElement = this.sigPad.nativeElement;
        this.context = this.sigPadElement.getContext('2d');
        this.context.strokeStyle = '#3742fa';
        this.loadInitial();
        this.updateFilters();
        this.columns = this.getColumns();
        this.items = this.getItems();
    };
    ConsultaEpisEntreguesComponent.prototype.loadInitial = function () {
        this.loadTableColumns(); //.loadSituationOptions().loadTableData();
    };
    ConsultaEpisEntreguesComponent.prototype.loadSituationOptions = function () {
        this.situationOptions = this.service.getSituationOptions();
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.loadTableColumns = function () {
        this.tableColumns = this.service.getColumns(this);
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.loadTableData = function (filter) {
        var _this = this;
        this.service.getItems(filter, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                return _this;
            }
            _this.tableData = response.items;
            _this.addActionsOnItens();
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            return null;
        });
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.loadTableDataFilter = function (filter) {
        this.tableData = this.service.getItemsFilter(filter);
        this.addActionsOnItens();
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.onAdvancedSearch = function (filter, fromModal) {
        // if(this.isEmptyFilter(filter)){
        //   if(fromModal === true){
        //     this.thfDialog.alert({title: 'Atenção', message: 'Informe ao menos um campo para continuar!'});
        //     this.setShowLoading(false);
        //     return this;
        //   }
        // }
        var _this = this;
        if (!filter.hasOwnProperty('cdn-funcionario')) {
            this.thfDialog.alert({ title: 'Atenção', message: 'É necessário informar a matrícula do funcionário para continuar!' });
            this.setShowLoading(false);
            return this;
        }
        if (!filter.hasOwnProperty('nome-func')) {
            this.thfDialog.alert({ title: 'Atenção', message: 'É necessário informar o nome do funcionário para continuar' });
            this.setShowLoading(false);
            return this;
        }
        if (!filter.hasOwnProperty('cdn-empresa') && fromModal) {
            this.thfDialog.alert({ title: 'Atenção', message: 'É necessário informar a empresa para continuar!' });
            this.setShowLoading(false);
            return this;
        }
        if (!filter.hasOwnProperty('cod-estabel') && fromModal) {
            this.thfDialog.alert({ title: 'Atenção', message: 'É necessário informar o estabelecimento para continuar!' });
            this.setShowLoading(false);
            return this;
        }
        var cdn_func = filter.hasOwnProperty('cdn-funcionario') ? filter['cdn-funcionario'] : '';
        if (!Number.isInteger(parseInt(cdn_func)) && cdn_func != '') {
            this.thfDialog.alert({ title: 'Atenção', message: 'A matrícula deve ser um número inteiro!' });
            return false;
        }
        var empresa_padrao = localStorage.getItem('ent_epi_empresa') || '';
        var estabelecimento_padrao = localStorage.getItem('ent_epi_estabelecimento') || '';
        var filter_use = {
            "cdn-funcionario": parseInt(cdn_func),
            "nome-func": filter.hasOwnProperty('nome-func') ? filter['nome-func'] : '',
            "ep-codigo": filter.hasOwnProperty('cdn-empresa') ? filter['cdn-empresa'] : empresa_padrao,
            "cod-estabel": filter.hasOwnProperty('cod-estabel') ? filter['cod-estabel'] : estabelecimento_padrao,
            "dt-ent-ini": filter.hasOwnProperty('dt-ent-ini') ? filter['dt-ent-ini'] : '2000-01-01',
            "dt-ent-fim": filter.hasOwnProperty('dt-ent-fim') ? filter['dt-ent-fim'] : '9999-12-31',
            "epi-ini": filter.hasOwnProperty('epi-ini') ? filter['epi-ini'] : '',
            "epi-fim": filter.hasOwnProperty('epi-fim') ? filter['epi-fim'] : 'ZZZZZZZZ',
            "entrega-pend": filter.hasOwnProperty('entrega-pend') ? filter['entrega-pend'] : 'true'
        };
        this.setShowLoading(true);
        var data = {
            "metodo": "funcionarioEPI",
            "paramEPI": filter_use
        };
        this.service.apiCrudEpi(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                return _this;
            }
            _this.tableData = response.items;
            _this.addActionsOnItens();
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
        // this.isEmptyFilter(filter) ? this.loadTableData() : this.loadTableData(filter);
    };
    /**
     * Evento disparado ao remover um ou todos os filtros pelo usuário.
     * @param disclaimers
     */
    ConsultaEpisEntreguesComponent.prototype.onChangeDisclaimers = function (disclaimers) {
        this.setShowLoading(true);
        var filter = {};
        disclaimers.forEach(function (item) {
            filter[item.property] = item.value;
        });
        this.onAdvancedSearch(filter);
    };
    /**
     * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
     * @param filter
     */
    ConsultaEpisEntreguesComponent.prototype.onQuickSearch = function (filter) {
        var _this = this;
        localStorage.setItem('filter', filter);
        if (this.isEmptyFilter(filter)) {
            this.thfDialog.alert({ title: 'Atenção', message: 'Informe o nome ou matrícula de um funcionário!' });
            return this;
        }
        if (!Number.isInteger(parseInt(filter))) {
            this.thfDialog.alert({ title: 'Atenção', message: 'A matrícula deve ser um número inteiro!' });
            return false;
        }
        this.setShowLoading(true);
        var empresa_padrao = localStorage.getItem('ent_epi_empresa') || '';
        var estabelecimento_padrao = localStorage.getItem('ent_epi_estabelecimento') || '';
        var filter_use = {
            "cdn-funcionario": parseInt(filter),
            "ep-codigo": empresa_padrao,
            "cod-estabel": estabelecimento_padrao,
            "dt-ent-fim": "9999-12-31",
            "dt-ent-ini": "2000-01-01",
            "entrega-pend": "true",
            "epi-fim": "ZZZZZZZZ",
            "epi-ini": ""
        };
        var data = {
            "metodo": "funcionarioEPI",
            "paramEPI": filter_use
        };
        var dataFunc = {
            "metodo": "consultaFunc",
            "paramFunc": {
                "cdn-funcionario": filter_use['cdn-funcionario'],
                "cod-estabel": "1",
                "ep-codigo": "1"
            }
        };
        this.service.apiCrudFunc(dataFunc, function (response) {
            _this.nameFunc = response.items[0]['nome-func'];
            _this.cdnEmp = response.items[0]['cdn-empresa'];
            _this.cdnFunc = response.items[0]['cdn-funcionario'];
            _this.codCargo = response.items[0]['cod-cargo-basic'];
            _this.codEstab = response.items[0]['cod-estabel'];
            _this.dateAdm = response.items[0]['dat-admissao'];
            _this.desCargo = response.items[0]['des-cargo-basic'];
            _this.descUnid = response.items[0]['desc-unid-lotac'];
            _this.undLotac = response.items[0]['unid-lotac'];
            _this.items = _this.getItems();
        });
        this.service.getItems(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                _this.setShowLoading(false);
                return _this;
            }
            _this.tableData = response.items;
            _this.addActionsOnItens();
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.onQuickSearch2 = function (filter) {
        var _this = this;
        filter = localStorage.getItem('filter');
        if (this.isEmptyFilter(filter)) {
            /* this.thfDialog.alert({ title: 'Atenção', message: 'Informe o nome ou matrícula de um funcionário!' }); */
            return this;
        }
        if (!Number.isInteger(parseInt(filter))) {
            /* this.thfDialog.alert({ title: 'Atenção', message: 'A matrícula deve ser um número inteiro!' }); */
            return false;
        }
        this.setShowLoading(true);
        var empresa_padrao = localStorage.getItem('ent_epi_empresa') || '';
        var estabelecimento_padrao = localStorage.getItem('ent_epi_estabelecimento') || '';
        var filter_use = {
            "cdn-funcionario": parseInt(filter),
            "ep-codigo": empresa_padrao,
            "cod-estabel": estabelecimento_padrao,
            "dt-ent-fim": "9999-12-31",
            "dt-ent-ini": "2000-01-01",
            "entrega-pend": "true",
            "epi-fim": "ZZZZZZZZ",
            "epi-ini": ""
        };
        var data = {
            "metodo": "funcionarioEPI",
            "paramEPI": filter_use
        };
        var dataFunc = {
            "metodo": "consultaFunc",
            "paramFunc": {
                "cdn-funcionario": filter_use['cdn-funcionario'],
                "cod-estabel": "1",
                "ep-codigo": "1"
            }
        };
        this.service.apiCrudFunc(dataFunc, function (response) {
            _this.nameFunc = response.items[0]['nome-func'];
            _this.cdnEmp = response.items[0]['cdn-empresa'];
            _this.cdnFunc = response.items[0]['cdn-funcionario'];
            _this.codCargo = response.items[0]['cod-cargo-basic'];
            _this.codEstab = response.items[0]['cod-estabel'];
            _this.dateAdm = response.items[0]['dat-admissao'];
            _this.desCargo = response.items[0]['des-cargo-basic'];
            _this.descUnid = response.items[0]['desc-unid-lotac'];
            _this.undLotac = response.items[0]['unid-lotac'];
            _this.items = _this.getItems();
        });
        this.service.getItems(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                _this.setShowLoading(false);
                return _this;
            }
            _this.tableData = response.items;
            _this.addActionsOnItens();
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.isEmptyFilter = function (obj) {
        if (!obj) {
            return true;
        }
        return Object.keys(obj).length === 0;
    };
    ConsultaEpisEntreguesComponent.prototype.loadEpis = function () {
        var _this = this;
        if (!this.getCarregouEpis()) {
            this.setShowLoading(true);
            this.service.apiConsultaEpi(function (response) {
                if (response.total == 0) {
                    _this.thfDialog.alert({ title: 'Atenção', message: 'Epis não encontrados!' });
                    _this.setShowLoading(false);
                    return _this;
                }
                if (response.items[0].hasOwnProperty('cod-erro')) {
                    var string_error = '';
                    for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                        var error = _a[_i];
                        string_error = string_error + error['desc-erro'] + '. ';
                    }
                    _this.thfDialog.alert({ title: 'Atenção', message: string_error });
                    _this.setShowLoading(false);
                    return _this;
                }
                if (!response.items[0].hasOwnProperty('ds_fornec')) {
                    _this.thfDialog.alert({ title: 'Atenção', message: 'Epis não encontrados!' });
                    _this.setShowLoading(false);
                    return _this;
                }
                var epis = response.items[0].ds_fornec['tt-cons-epi'].map(function (el) {
                    return { label: el.cod_epi + ' - ' + el.nome, value: el.cod_epi };
                });
                _this.setEpisList(epis);
                _this.setShowLoading(false);
            }, function (error) {
                console.log('errooooooo', error);
                //TODO: informar erro com dialog
                _this.setShowLoading(false);
                return null;
            });
        }
    };
    ConsultaEpisEntreguesComponent.prototype.abrirModalDetalhe = function (value, row, type, title) {
        this.title = title;
        this.registro_selecionado = value;
        this.modal_type = type;
        this.authentication_type = authentication_type_default;
        this.loadFornecedores(this.registro_selecionado['cod-epi']);
        this.thfModal.open();
    };
    ConsultaEpisEntreguesComponent.prototype.abrirModalAdd = function () {
        // this.loadEpis();
        this.title = 'Adicionar';
        this.registro_selecionado = {
            'cod-epi': null
        };
        this.modal_type = 'add';
        this.authentication_type = authentication_type_default;
        this.thfModal.open();
    };
    ConsultaEpisEntreguesComponent.prototype.resetFilters = function () {
        this.tableData = []; // = this.sampleHiringProcessesService.resetFilterHiringProcess();
    };
    ConsultaEpisEntreguesComponent.prototype.searchItems = function (filter) {
        this.tableData = []; // = this.sampleHiringProcessesService.filter(filter);
    };
    ConsultaEpisEntreguesComponent.prototype.updateFilters = function () {
        // this.filters[0].options = this.situationOptions;
    };
    ConsultaEpisEntreguesComponent.prototype.changeAuthenticationType = function (event) {
        //não utilizado
        // this.authentication_type = event;
    };
    ConsultaEpisEntreguesComponent.prototype.getPrimaryAction = function () {
        var actions = {
            'attend': this.modal_primary_action_attend,
            'getAssignature': this.modal_primary_action_getAssignature,
            'detail': this.modal_primary_action_detalhe,
            'edit': this.modal_primary_action_salvar,
            'delete': this.modal_primary_action_excluir,
            'add': this.modal_primary_action_add,
            'detalhes': this.modal_primary_action_detalhes
        };
        return actions[this.modal_type];
        return this.modal_type == 'attend' ? this.modal_primary_action_attend : null;
    };
    ConsultaEpisEntreguesComponent.prototype.getSecondaryAction = function () {
        var actions = {
            'attend': this.modal_secondary_action_attend,
            'getAssignature': null,
            'detail': null,
            'edit': this.modal_secondary_action_cancelar,
            'add': this.modal_secondary_action_cancelar,
            'delete': this.modal_secondary_action_excluir,
            'detalhes': this.modal_primary_action_detalhes
        };
        return actions[this.modal_type];
        return this.modal_type == 'attend' ? this.modal_secondary_action_attend : null;
    };
    ConsultaEpisEntreguesComponent.prototype.goToGetAuthentication = function () {
        if (this.authentication_type == '1') {
            // this.thfModal.close();
            this.modal_type = 'getAssignature';
            this.title = 'Assinar';
            this.thfModal.open();
        }
        else {
            this.thfDialog.alert({ title: 'Atenção', message: 'Essa opção ainda não está disponível!' });
        }
        // this.router.navigate(['atender']);
    };
    ConsultaEpisEntreguesComponent.prototype.goToSave = function () {
        var _this = this;
        this.setShowLoading(true);
        var data = {
            "tt-param": [
                {
                    "tp-oper": 2 //alteração
                }
            ],
            "tt-epi": [
                {
                    "cdn_estab": this.codEstabelecimento,
                    "cdn_funcionario": this.cdnFunc,
                    "cod_epi": this.registro_selecionado['cod_epi'],
                    "cdn_fornecedor": this.registro_selecionado['cdn-fornecedor'],
                    "dat_entreg_epi": this.dateNow,
                    "qtd_entreg_epi": this.qtd,
                    "cod_unid_med_epi": this.registro_selecionado['unid-med-epi'],
                    "dat_subst_epi": this.registro_selecionado['dat-subst-epi'] ? this.registro_selecionado['dat-subst-epi'] : null
                }
            ]
        };
        this.service.apiCrudEpiFunc(data, function (response) {
            console.log(data);
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].ds_ret['tt-ret'][0].chave != 'OK') {
                // let string_error = '';
                // for (let error of response.items[0].ds_ret['tt-ret']) {
                //   string_error = string_error + error['mensagem'] + '. ';
                // }
                // this.thfDialog.alert({title: 'Atenção', message: string_error});
                _this.thfDialog.alert({ title: 'Atenção', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
                _this.setShowLoading(false);
                return _this;
            }
            _this.thfDialog.alert({ title: 'Sucesso', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.postEpiDesc = function () {
        var _this = this;
        this.paramsConsEpi = {
            "cod_epi": this.registro_selecionado['cod-epi']
        };
        this.service.postEpiDesc(this.paramsConsEpi, function (response) {
            _this.codEpi = response.items[0].ds_fornec["tt-cons-epi"][0].cod_epi;
            _this.descEpi = response.items[0].ds_fornec["tt-cons-epi"][0].nome;
            _this.codEpi = _this.codEpi;
            _this.descEpi = _this.descEpi;
            console.log(_this.codEpi);
            _this.loadFornecedores(_this.codEpi);
        });
    };
    ConsultaEpisEntreguesComponent.prototype.goToDelete = function () {
        var _this = this;
        this.setShowLoading(true);
        var data = {
            "tt-param": [
                {
                    "tp-oper": 3 //deleção
                }
            ],
            "tt-epi": [
                {
                    "cdn_estab": this.codEstabelecimento,
                    "cdn_funcionario": this.cdnFunc,
                    "cod_epi": this.registro_selecionado['cod-epi'],
                    "cdn_fornecedor": this.registro_selecionado['cdn-fornecedor'],
                    "dat_entreg_epi": this.registro_selecionado['dat-entreg-epi'].getFullYear() + '-' + (this.registro_selecionado['dat-entreg-epi'].getMonth() + 1) + '-' + this.registro_selecionado['dat-entreg-epi'].getDate(),
                    "qtd_entreg_epi": this.qtd,
                    "cod_unid_med_epi": this.registro_selecionado['unid-med-epi'],
                    "dat_subst_epi": this.registro_selecionado['dat-subst-epi']
                }
            ]
        };
        console.log(this.registro_selecionado['dat-entreg-epi']);
        this.service.apiCrudEpiFunc(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].ds_ret['tt-ret'][0].chave != 'OK') {
                // let string_error = '';
                // for (let error of response.items[0].ds_ret['tt-ret']) {
                //   string_error = string_error + error['mensagem'] + '. ';
                // }
                // this.thfDialog.alert({title: 'Atenção', message: string_error});
                _this.thfDialog.alert({ title: 'Atenção', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
                _this.setShowLoading(false);
                return _this;
            }
            _this.thfDialog.alert({ title: 'Sucesso', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.goToAdd = function () {
        var _this = this;
        this.setShowLoading(true);
        var data = {
            "tt-param": [
                {
                    "tp-oper": 1 //inclusão
                }
            ],
            "tt-epi": [
                {
                    "cdn_estab": this.codEstabelecimento,
                    "cdn_funcionario": this.cdnFunc,
                    "cod_epi": this.paramsConsEpi['cod_epi'],
                    "cdn_fornecedor": this.registro_selecionado['cdn-fornecedor'],
                    "dat_entreg_epi": this.dateNow,
                    "qtd_entreg_epi": this.qtd,
                    "cod_unid_med_epi": this.registro_selecionado['unid-med-epi'],
                    "dat_subst_epi": this.registro_selecionado['dat-subst-epi'] ? this.registro_selecionado['dat-subst-epi'].split('T')[0] : null
                }
            ]
        };
        this.service.apiCrudEpiFunc(data, function (response) {
            console.log(response);
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].ds_ret['tt-ret'][0].chave != 'OK') {
                // let string_error = '';
                // for (let error of response.items[0].ds_ret['tt-ret']) {
                //   string_error = string_error + error['mensagem'] + '. ';
                // }
                // this.thfDialog.alert({title: 'Atenção', message: string_error});
                _this.thfDialog.alert({ title: 'Atenção', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
                _this.setShowLoading(false);
                return _this;
            }
            _this.thfDialog.alert({ title: 'Sucesso', message: response.items[0].ds_ret['tt-ret'][0].mensagem });
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.goToAttend = function () {
        var dados = this.registro_selecionado;
        dados.tipo_autenticacao = this.authentication_type;
        if (this.authentication_type == '1') {
            dados.autenticacao = this.sigPadElement.toDataURL("image/png");
        }
        if (dados['dat-entreg-epi']) {
            dados['dat-entreg-epi'].setDate(dados['dat-entreg-epi'].getDate() - 1);
            dados['dat-entreg-epi'] = dados['dat-entreg-epi'].toISOString().slice(0, 10);
        }
        if (dados['data-trans']) {
            dados['data-trans'].setDate(dados['data-trans'].getDate() + 1);
            dados['data-trans'] = dados['data-trans'].toISOString().slice(0, 10);
        }
        if (dados['dat-devol-epi']) {
            dados['dat-devol-epi'].setDate(dados['dat-devol-epi'].getDate() + 1);
            dados['dat-devol-epi'] = dados['dat-devol-epi'].toISOString().slice(0, 10);
        }
        if (dados['dat-subst-epi']) {
            dados['dat-subst-epi'].setDate(dados['dat-subst-epi'].getDate() + 1);
            dados['dat-subst-epi'] = dados['dat-subst-epi'].toISOString().slice(0, 10);
        }
        var url_destination = 'atender';
        this.router.navigate([url_destination], { queryParams: dados });
    };
    ConsultaEpisEntreguesComponent.prototype.onMouseUp = function (e) {
        this.isDrawing = false;
    };
    ConsultaEpisEntreguesComponent.prototype.onMouseDown = function (e) {
        this.isDrawing = true;
        var coords = this.relativeCoords(e);
        this.context.moveTo(coords.x, coords.y);
    };
    ConsultaEpisEntreguesComponent.prototype.onMouseMove = function (e) {
        if (this.isDrawing) {
            var coords = this.relativeCoords(e);
            this.context.lineTo(coords.x, coords.y);
            this.context.stroke();
        }
    };
    ConsultaEpisEntreguesComponent.prototype.relativeCoords = function (event) {
        var bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        return { x: x, y: y };
    };
    ConsultaEpisEntreguesComponent.prototype.clear = function () {
        this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
        this.context.beginPath();
        this.img = null;
        this.assignature1 = null;
        this.assignature2 = null;
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.compareImage = function () {
        var _this = this;
        this.img = this.sigPadElement.toDataURL("image/png");
        this.setShowLoading(true);
        var data = {
            "metodo": "consultaFunc",
            "paramFunc": {
                "cdn-funcionario": this.cdnFunc,
                "cod-estabel": this.codEstabelecimento,
                "ep-codigo": this.registro_selecionado['cdn-empresa']
            }
        };
        this.service.apiCrudFunc(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Funcionário não encontrado!' });
                _this.setShowLoading(false);
                return _this;
            }
            if (response.items[0].hasOwnProperty('cod-erro')) {
                var string_error = '';
                for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                    var error = _a[_i];
                    string_error = string_error + error['desc-erro'] + '. ';
                }
                _this.thfDialog.alert({ title: 'Atenção', message: string_error });
                _this.setShowLoading(false);
                return _this;
            }
            _this.assignature1 = response.items[0]['assinatura1'] == '' ? null : response.items[0]['assinatura1'];
            _this.assignature2 = response.items[0]['assinatura2'] == '' ? null : response.items[0]['assinatura2'];
            if (!_this.assignature1 && !_this.assignature1) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'O funcionário não possui uma assinatura cadastrada!' });
            }
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
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
    };
    ConsultaEpisEntreguesComponent.prototype.getShowLoading = function () { return this.show_loading; };
    ConsultaEpisEntreguesComponent.prototype.setShowLoading = function (v) {
        this.show_loading = v;
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.addActionsOnItens = function () {
        this.tableData = this.tableData.map(function (item) {
            item['actions'] = ['detalhar', 'atender', 'editar', 'excluir'];
            if (item['dat-entreg-epi']) {
                item['dat-entreg-epi'] = new Date(item['dat-entreg-epi']);
                item['dat-entreg-epi'].setDate(item['dat-entreg-epi'].getDate() + 1);
            }
            if (item['data-trans']) {
                item['data-trans'] = new Date(item['data-trans']);
                item['data-trans'].setDate(item['data-trans'].getDate() + 1);
            }
            if (item['dat-devol-epi']) {
                item['dat-devol-epi'] = new Date(item['dat-devol-epi']);
                item['dat-devol-epi'].setDate(item['dat-devol-epi'].getDate() + 1);
            }
            if (item['dat-subst-epi']) {
                item['dat-subst-epi'] = new Date(item['dat-subst-epi']);
                item['dat-subst-epi'].setDate(item['dat-subst-epi'].getDate() + 1);
            }
            return item;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.getCarregouEpis = function () {
        return this.carregou_epis;
    };
    ConsultaEpisEntreguesComponent.prototype.setCarregouEpis = function (value) {
        this.carregou_epis = value;
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.getEpisList = function () {
        return this.epis_list;
    };
    ConsultaEpisEntreguesComponent.prototype.setEpisList = function (value) {
        this.epis_list = value;
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.getFornecsList = function () {
        return this.fornecs_list;
    };
    ConsultaEpisEntreguesComponent.prototype.setFornecsList = function (value) {
        this.fornecs_list = value;
        return this;
    };
    ConsultaEpisEntreguesComponent.prototype.loadFornecedores = function (event, from_change_epi) {
        var _this = this;
        if (from_change_epi === void 0) { from_change_epi = false; }
        if (from_change_epi) {
            this.registro_selecionado['cdn-fornecedor'] = null;
        }
        if (event == null) {
            return this;
        }
        var data = {
            "tt-epi": [
                {
                    "cdn_estab": null,
                    "cdn_funcionario": null,
                    "cod_epi": event,
                    "cdn_fornecedor": null,
                    "dat_entreg_epi": null,
                    "qtd_entreg_epi": null,
                    "cod_unid_med_epi": null,
                    "dat_subst_epi": null
                }
            ]
        };
        this.service.apiConsultaFornecEpi(data, function (response) {
            if (response.total == 0) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados!' });
                return _this;
            }
            if (!response.items[0]['ds_fornec'].hasOwnProperty('tt-consult-forne')) {
                _this.thfDialog.alert({ title: 'Atenção', message: 'Dados não encontrados para o epi informado!' });
                return _this;
            }
            //[{label: 'Option 1', value: '1'}, {label: 'Option 2', value: '2'}]
            var fornecs = response.items[0].ds_fornec['tt-consult-forne'].map(function (el) {
                return { label: el.cdn_fornecedor + ' - ' + el.nom_pessoa_jurid, value: el.cdn_fornecedor };
            });
            _this.setFornecsList(fornecs);
            _this.registro_selecionado['unid-med-epi'] = response.items[0].ds_fornec['tt-consult-forne'][0]['cod_unid_med_epi'];
            _this.setShowLoading(false);
        }, function (error) {
            console.log('errooooooo', error);
            //TODO: informar erro com dialog
            _this.setShowLoading(false);
            return null;
        });
    };
    ConsultaEpisEntreguesComponent.prototype.getColumns = function () {
        return [
            { property: 'unid', label: 'Und Lotação' },
            { property: 'desc', label: 'Desc. Und. Lotação', type: 'string' },
            { property: 'cod', label: 'Cod. Cargo', type: 'number' },
            { property: 'des', label: 'Desc. Cargo', type: 'string' },
            { property: 'dat', label: 'Dt. Admissão', type: 'string' },
        ];
    };
    ConsultaEpisEntreguesComponent.prototype.getItems = function () {
        return [{
                unid: this.undLotac,
                desc: this.descUnid,
                cod: this.codCargo,
                des: this.desCargo,
                dat: this.dateAdm
            }];
    };
    ConsultaEpisEntreguesComponent.prototype.resetForm = function () {
        this.paramsConsEpi['cod_epi'] = '';
        this.descEpi = '';
        this.registro_selecionado['cdn-fornecedor'] = '';
        this.registro_selecionado['unid-med-epi'] = '';
        this.registro_selecionado['dat-subst-epi'] = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfModalComponent"])
    ], ConsultaEpisEntreguesComponent.prototype, "thfModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sigPadAssignature'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConsultaEpisEntreguesComponent.prototype, "sigPad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ConsultaEpisEntreguesComponent.prototype, "onMouseUp", null);
    ConsultaEpisEntreguesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consulta-epis-entregues',
            template: __webpack_require__(/*! ./consulta-epis-entregues.component.html */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.html"),
            providers: [_consulta_epis_entregues_service__WEBPACK_IMPORTED_MODULE_4__["ConsultaEpisEntreguesService"]],
            styles: [__webpack_require__(/*! ./consulta-epis-entregues.component.css */ "./src/app/consulta-epis-entregues/consulta-epis-entregues.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_consulta_epis_entregues_service__WEBPACK_IMPORTED_MODULE_4__["ConsultaEpisEntreguesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _totvs_thf_ui__WEBPACK_IMPORTED_MODULE_3__["ThfDialogService"]])
    ], ConsultaEpisEntreguesComponent);
    return ConsultaEpisEntreguesComponent;
}());



/***/ }),

/***/ "./src/app/consulta-epis-entregues/consulta-epis-entregues.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/consulta-epis-entregues/consulta-epis-entregues.service.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultaEpisEntreguesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaEpisEntreguesService", function() { return ConsultaEpisEntreguesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




var ConsultaEpisEntreguesService = /** @class */ (function () {
    // private httpOptions = {
    //   headers: new HttpHeaders(
    //     {
    //       'Content-Type': 'application/json'
    //     }
    //   ),
    //   responseType: 'text'
    // }
    function ConsultaEpisEntreguesService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url_api;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': '*/*',
        });
    }
    // filter(filters) {
    //   let filteredItems = this.getItems();
    //   Object.keys(filters).forEach(filter => {
    //     filteredItems = filteredItems.filter(register => {
    //       return register[filter].toLocaleLowerCase().includes(filters[filter].toLocaleLowerCase());
    //     });
    //   });
    //   return filteredItems;
    // }
    ConsultaEpisEntreguesService.prototype.getColumns = function (component_instance) {
        return [
            { property: 'actions', label: 'Ações', type: 'icon', icons: [
                    {
                        action: function (value, row) {
                            component_instance.abrirModalDetalhe(value, row, "detail", "Detalhes");
                        },
                        color: 'primary',
                        icon: 'thf-icon thf-icon-list',
                        tooltip: 'Clique para ver os detalhes',
                        value: 'detalhar'
                    },
                    {
                        action: function (value, row) {
                            component_instance.abrirModalDetalhe(value, row, 'attend', 'Atender');
                        },
                        // disabled: component_instance.canGoToDocumentation.bind(this),
                        icon: 'thf-icon-clock',
                        tooltip: 'Clique para atender',
                        value: 'atender'
                    },
                    {
                        action: function (value, row) {
                            component_instance.abrirModalDetalhe(value, row, 'edit', 'Editar');
                        },
                        // disabled: component_instance.canGoToDocumentation.bind(this),
                        icon: 'thf-icon-edit',
                        tooltip: 'Clique para editar',
                        value: 'editar'
                    },
                    {
                        action: function (value, row) {
                            component_instance.abrirModalDetalhe(value, row, 'delete', 'Excluir');
                        },
                        // disabled: component_instance.canGoToDocumentation.bind(this),
                        icon: 'thf-icon-delete',
                        tooltip: 'Clique para excluir',
                        value: 'excluir'
                    }
                ] },
            // { property: 'situacao', label: 'Situação', type: 'subtitle', subtitles: [
            //   { value: '1', color: 'danger', label: 'Entrega não realizada', content: '1' },
            //   { value: '2', color: 'warning', label: 'Nec. Subst', content: '2' }
            // ]},
            // { property: 'id', label: '', type: 'number'},
            { property: 'cod-epi', label: 'Cód. EPI', type: 'string' },
            { property: 'desc-epi', label: 'EPI', type: 'string' },
            { property: 'cdn-fornecedor', label: 'Fornecedor', type: 'string' },
            { property: 'dat-entreg-epi', label: 'Entrega', type: 'date' },
            { property: 'qtd-entreg-epi', label: 'Quantidade', type: 'number' },
            { property: 'unid-med-epi', label: 'Unidade', type: 'string' },
            // { property: 'num', label: 'Numeração/Tam', type: 'string'},
            // { property: 'subst', label: 'Substituição', type: 'boolean'},
            { property: 'log-epi-novo', label: 'EPI Novo', type: 'boolean' },
        ];
    };
    /**
     *
     * @param filter Parâmetro opcional, se não informado, trazer todos os dados sem filtro. Se informado, deverá conter um objeto com o campo a filtrar e seu valor.
     */
    ConsultaEpisEntreguesService.prototype.getItems = function (filter, success_func, error_func) {
        // success_func({
        //   "items": [
        //   {'desc-epi': 'Bota', 'cdn-fornecedor': '1', 'dat-entreg-epi': '2021-02-22', 'qtd-entreg-epi': 2, 'unid-med-epi': 'Un', 'log-epi-novo':true, 'tipo-autentic': 1, 'desc-tipo-autentic': 'Biometria',
        //     'cdn-funcionario': 1,
        //     'cdn-empresa': 1,
        //     'cod-estabel': 1,
        //     'cod-epi': 1,
        //     'cod-usuar-trans': 1,
        //     'nom-usu-trans': 'Daniel',
        //     'data-trans': null,
        //     'hora-trans': '10:19:50',
        //     'dat-devol-epi': '2021-05-01',
        //     'qtd-devol-epi': 1,
        //     'dat-subst-epi': '2021-05-01',
        //     'assin-recib-epi': 1,
        //     'autenticacao-1': "data:image/png;base64,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",
        //     'autenticacao-2': "data:image/png;base64,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"
        //   },
        //   // {'desc-epi': 'Bota', 'cdn-fornecedor': '1', 'dat-entreg-epi': '2021-02-22', 'qtd-entreg-epi': 2, 'unid-med-epi': 'Un', 'log-epi-novo':true, 'tipo-autentic': 1, 'desc-tipo-autentic': 'Biometria', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal',
        //   // }
        // ]});
        // return filter ? [
        //   {situacao: '1', id: '001', epi: 'Bota', fornecedor: '1 - Casa das botas', entrega: '2021-02-22', qtde: 2, un: 'Un', num: '42', subst: true, epi_novo:true, rec_treinam: false, tp_entrega: 'Biometria', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal'},
        // ]
        // :
        // [
        //   {situacao: '1', id: '001', epi: 'Bota', fornecedor: '1 - Casa das botas', entrega: '2021-02-22', qtde: 2, un: 'Un', num: '42', subst: true, epi_novo:true, rec_treinam: false, tp_entrega: 'Biometria', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal'},
        //   {situacao: '2', id: '002', epi: 'Luva', fornecedor: '2 - Casa das luvas', entrega: '2021-02-23', qtde: 5, un: 'Un', num: 'G', subst: false, epi_novo:true, rec_treinam: true, tp_entrega: 'Assinatura', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal'},
        // ];
        return this.apiCrudEpi(filter, success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.apiCrudEpi = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-crud-epi';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    /**
     * filter sera um objeto com a propriedade 'value' contendo o valor a ser filtrado na busca rápida.
     * @param filter
     * @returns Lista com os itens para exibir na tabela
     */
    ConsultaEpisEntreguesService.prototype.getItemsFilter = function (filter) {
        return [
            { situacao: '2', id: '002', epi: 'Luva', fornecedor: '2 - Casa das luvas', entrega: '2021-02-23', qtde: 5, un: 'Un', num: 'G', subst: false, epi_novo: true, rec_treinam: true, tp_entrega: 'Assinatura', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal' },
        ];
    };
    ConsultaEpisEntreguesService.prototype.getSituationOptions = function () {
        return [
            { value: '1', label: 'Entrega não realizada' },
            { value: '2', label: 'Nec. Subst' }
        ];
    };
    // resetFilterHiringProcess() {
    //   return this.getItems();
    // }
    ConsultaEpisEntreguesService.prototype.execProcedureTeste = function (data_send) {
        var url = this.baseUrl + 'api-crud-epi';
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(function (response) {
            console.log('sucessooooooooo', response);
            return null;
        }, function (error) {
            console.log('errooooooo', error);
            return null;
        });
        /*
            return this.http.get('http://server-totvs:8080/dts/datasul-rest/resources/login?username=super&password=PbDaLzKE5MLxxP5kXZarfjHkCO4=', {
              headers: this.headers,
              responseType: 'text',
              // observe: 'response' as 'response'
            })
            .subscribe((res)=>{
              console.log('token', res);
        
              // res.get("set-cookie")
        
              let headers_send = new HttpHeaders(
                {
                  'Content-Type': 'application/json',
                  //  'Cookie': 'JOSSO_SESSIONID='+ res
                  // 'Access-Control-Allow-Origin': '*',
                  // 'withCredentials': 'true'
                }
              );
              // .set('Cookie', 'JOSSO_SESSIONID='+ res );
        
              // console.log(headers_send);
        
              return this.http.post(url, JSON.stringify(data_send) , {
                headers: headers_send,
                responseType: 'text',
                withCredentials: true
              } )
              .subscribe(
                (response)=>{
                  console.log('sucessooooooooo', response);
                  return null;
                },
                (error)=>{
                  // console.log('errooooooo', error);
                  return null;
                }
              )
        
            },
            (error)=>{
              console.log('errooo tomkeeeeen', error);
            }
            );
          */
        /*
        $.ajax({
              url : url,
              type : 'post',
              contentType:'application/json',
              data :  JSON.stringify(data_send),
              xhrFields: {
                withCredentials: true
              },
              beforeSend : function(){
                      console.log("ENVIANDO...");
                  }
              })
              .done(function(msg){
                console.log('TEEEEEEEEEEEEEEEEEEEE', msg);
      
      
      
      
              })
              .fail(function(jqXHR, textStatus, msg){
      
                  console.log(msg);
      
              });
        */
    };
    //API dos funcionários
    ConsultaEpisEntreguesService.prototype.apiCrudFunc = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-crud-func';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.apiConsulDescEpi = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-consult-epi3';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.apiCrudEpiFunc = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-crudepi';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(data_send), {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.apiConsultaEpi = function (success_func, error_func) {
        var url = this.baseUrl + 'api-consult-epi';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.get(url, {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.apiConsultaFornecEpi = function (data_send, success_func, error_func) {
        var url = this.baseUrl + 'api-consult-fornec-epi';
        // let headers_send = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json',
        //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
        //   }
        // );
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        return this.http.post(url, data_send, {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    ConsultaEpisEntreguesService.prototype.postEpiDesc = function (params, success_func, error_func) {
        var headers_send = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
        headers_send = headers_send.append("Content-Type", "application/json");
        var params2 = {
            "tt-param-epi": params
        };
        return this.http.post('https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/api-consult-epi3', params2, {
            headers: headers_send,
            responseType: 'json',
            withCredentials: true
        })
            .subscribe(success_func, error_func);
    };
    ConsultaEpisEntreguesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsultaEpisEntreguesService);
    return ConsultaEpisEntreguesService;
}());



/***/ }),

/***/ "./src/app/literals/i18n/general-en.ts":
/*!*********************************************!*\
  !*** ./src/app/literals/i18n/general-en.ts ***!
  \*********************************************/
/*! exports provided: generalEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalEn", function() { return generalEn; });
var generalEn = {
    action: 'Action',
    actions: 'Other Actions',
    add: 'Add',
    addNewClient: 'Add New Client',
    birthday: 'Birthday Date',
    cancel: 'Cancel',
    customers: 'Customers',
    customer: 'Customer',
    code: 'Code',
    confirm: 'Confirmar',
    controller: 'Controlador',
    crafter: 'Crafter',
    edit: 'Edit',
    editClient: 'Edit Client',
    email: 'Email',
    excludedCustomer: 'Excluded customer(s) with success',
    export: 'Export',
    idealist: 'Idealista',
    influency: 'Influency',
    insertValue: 'Insert Value',
    inventor: 'Inventor',
    modalCancelEditUserTitle: 'Deseja cancelar as alterações?',
    modalCancelEditUserMessage: 'Tem certeza que deseja cancelar as alterações do cadastro do cliente {0}?',
    modalDeleteMessage: 'Are you sure you want to delete client {0} from the client list?',
    modalDeleteTitle: 'Do you want to delete this registration?',
    name: 'Name',
    nationality: 'Nationality',
    performer: 'Performer',
    personality: 'Personality',
    phone: 'Phone',
    print: 'Print',
    protector: 'Protetor',
    remove: 'Remove',
    return: 'Back',
    saveClient: 'Save Client',
    search: 'Search',
    yes: 'Yes',
    orders: 'Orders',
    addNewOrder: 'Add New Order',
    date: 'Date',
    total: 'Total',
    modalDeleteOrder: 'Are you sure you want to delete {0}?',
    status: 'Status',
    pending: 'Pending',
    cancelled: 'Cancelled',
    completed: 'Completed',
    applyFilters: 'Apply Filters',
    deletedOrder: 'Order(s) successfully deleted',
    filters: 'Filters',
    new: 'New',
    newOrder: 'New Order',
    editOrder: 'Edit Order ',
    order: 'Order',
    product: 'Product',
    quantity: 'Quantity',
    items: 'Items',
    price: 'Price',
    addNew: 'Add New',
    discardChanges: 'Discard Changes',
    update: 'Update',
    orderSucessfullyCreated: 'Order sucessfully created',
    orderSucessfullyUpdated: 'Order sucessfully updated'
};


/***/ }),

/***/ "./src/app/literals/i18n/general-pt.ts":
/*!*********************************************!*\
  !*** ./src/app/literals/i18n/general-pt.ts ***!
  \*********************************************/
/*! exports provided: generalPt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalPt", function() { return generalPt; });
var generalPt = {
    action: 'Ação',
    actions: 'Outras Ações',
    add: 'Adicionar',
    addNewClient: 'Adicionar Novo Cliente',
    birthday: 'Data de Nascimento',
    cancel: 'Cancelar',
    customers: 'Clientes',
    customer: 'Cliente',
    code: 'Código',
    confirm: 'Confirmar',
    controller: 'Controlador',
    crafter: 'Crafter',
    edit: 'Editar',
    editClient: 'Editar Cliente',
    email: 'Email',
    excludedCustomer: 'Cliente(s) excluído(s) com sucesso',
    export: 'Exportar',
    idealist: 'Idealista',
    influency: 'Influência',
    insertValue: 'Insira o Valor',
    inventor: 'Inventor',
    modalCancelEditUserTitle: 'Deseja cancelar as alterações?',
    modalCancelEditUserMessage: 'Tem certeza que deseja cancelar as alterações do cadastro do cliente {0}?',
    modalDeleteMessage: 'Tem certeza de que deseja excluir o(s) cliente(s) {0} da lista de clientes?',
    modalDeleteTitle: 'Deseja excluir este cadastro?',
    name: 'Nome',
    nationality: 'Nacionalidade',
    performer: 'Performer',
    personality: 'Características',
    phone: 'Telefone',
    print: 'Imprimir',
    protector: 'Protetor',
    remove: 'Remover',
    return: 'Voltar',
    saveClient: 'Salvar Cliente',
    search: 'Buscar',
    yes: 'Sim',
    orders: 'Pedidos',
    addNewOrder: 'Adicionar Novo Pedido',
    date: 'Data',
    total: 'Total',
    modalDeleteOrder: 'Tem certeza de que deseja excluir o(s) pedido(s) {0}?',
    status: 'Status',
    pending: 'Pendente',
    cancelled: 'Cancelado',
    completed: 'Finalizado',
    applyFilters: 'Aplicar Filtros',
    deletedOrder: 'Pedido(s) excluído(s) com sucesso',
    filters: 'Filtros',
    new: 'Novo',
    newOrder: 'Novo Pedido',
    editOrder: 'Editar Pedido ',
    order: 'Pedido',
    product: 'Produto',
    quantity: 'Quantidade',
    items: 'Itens',
    price: 'Preço',
    addNew: 'Adicionar novo',
    discardChanges: 'Descartar alterações',
    update: 'Atualziar',
    orderSucessfullyCreated: 'Pedido criado com sucesso',
    orderSucessfullyUpdated: 'Pedido atualizado com sucesso'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    base_url_api: 'https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/' //base teste alpino
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateus Marcelino\Documents\Projetos\entrega_de_epis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map