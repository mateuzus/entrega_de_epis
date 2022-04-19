import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsultaEpisEntreguesService {

  private baseUrl: string = environment.base_url_api;

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    }
  );



  // private httpOptions = {
  //   headers: new HttpHeaders(
  //     {
  //       'Content-Type': 'application/json'
  //     }
  //   ),
  //   responseType: 'text'
  // }


  constructor(private http: HttpClient
  ) { }

  // filter(filters) {
  //   let filteredItems = this.getItems();

  //   Object.keys(filters).forEach(filter => {
  //     filteredItems = filteredItems.filter(register => {
  //       return register[filter].toLocaleLowerCase().includes(filters[filter].toLocaleLowerCase());
  //     });
  //   });

  //   return filteredItems;
  // }

  getColumns(component_instance) {
    return [
      {
        property: 'actions', label: 'Ações', type: 'icon', icons: [
          /* {
            action: (value, row) => {
                  component_instance.abrirModalDetalhe(
                    value, row, "detail", "Detalhes"
                  );
                },
            color: 'primary',
            icon: 'thf-icon thf-icon-list',
            tooltip: 'Clique para ver os detalhes',
            value: 'detalhar'
          }, */
          {
            action: (value, row) => {
              component_instance.abrirModalDetalhe(value, row, 'attend', 'Atender');
            },
            // disabled: component_instance.canGoToDocumentation.bind(this),
            icon: 'thf-icon-clock',
            tooltip: 'Clique para atender',
            value: 'atender'
          },
          /* {
            action: (value, row) => {
              component_instance.abrirModalDetalhe(value, row, 'edit', 'Editar');
            },
            // disabled: component_instance.canGoToDocumentation.bind(this),
            icon: 'thf-icon-edit',
            tooltip: 'Clique para editar',
            value: 'editar'
          }, */
          {
            action: (value, row) => {
              component_instance.abrirModalDetalhes(value, row, 'delete', 'Excluir');
            },
            // disabled: component_instance.canGoToDocumentation.bind(this),
            icon: 'thf-icon-delete',
            tooltip: 'Clique para excluir',
            value: 'excluir'
          }
        ]
      },
      // { property: 'situacao', label: 'Situação', type: 'subtitle', subtitles: [
      //   { value: '1', color: 'danger', label: 'Entrega não realizada', content: '1' },
      //   { value: '2', color: 'warning', label: 'Nec. Subst', content: '2' }
      // ]},
      // { property: 'id', label: '', type: 'number'},
      { property: 'cod-epi', label: 'Cód. EPI', type: 'string' },
      { property: 'desc-epi', label: 'EPI', type: 'string' },
      { property: 'it-codigo', label: 'Cod. Estoque'},
      { property: 'cdn-fornecedor', label: 'Fornecedor', type: 'string' },
      { property: 'dat-entreg-epi', label: 'Entrega', type: 'date' },
      { property: 'qtd-entreg-epi', label: 'Quantidade', type: 'number' },
      { property: 'unid-med-epi', label: 'Unidade', type: 'string' },
      // { property: 'num', label: 'Numeração/Tam', type: 'string'},
      // { property: 'subst', label: 'Substituição', type: 'boolean'},
      { property: 'log-epi-novo', label: 'EPI Novo', type: 'boolean' },
      // { property: 'rec_treinam', label: 'Rec Treinam', type: 'boolean'},
      // { property: 'desc-tipo-autentic', label: 'Tipo Entrega', type: 'string'}

      /* { property: 'tipo-autentic', label: 'Autenticação', type: 'subtitle', subtitles: [
        { value: 0, type: 'success', label: 'Não informada', content: '1' },
        { value: 1, type: 'success', label: 'Assinatura', content: '2' },
        { value: 2, type: 'success', label: 'Digital', content: '3' }
        ]
      } */
      // { property: 'detalhe', label: 'Detalhar', type: 'icon', action: (value, row) => {
      //     component_instance.abrirModalDetalhe(value, row);
      //   }
      // },
      // { property: 'atende', label: 'Atender', type: 'link'}

    ];
  }

  /**
   *
   * @param filter Parâmetro opcional, se não informado, trazer todos os dados sem filtro. Se informado, deverá conter um objeto com o campo a filtrar e seu valor.
   */
  getItems(filter, success_func, error_func) {
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

    return this.apiCrudEpi(filter, success_func, error_func)

  }

  apiCrudEpi(data_send, success_func, error_func) {
    let url = this.baseUrl + 'api-crud-epi';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }

  /**
   * filter sera um objeto com a propriedade 'value' contendo o valor a ser filtrado na busca rápida.
   * @param filter
   * @returns Lista com os itens para exibir na tabela
   */
  getItemsFilter(filter) {
    return [
      { situacao: '2', id: '002', epi: 'Luva', fornecedor: '2 - Casa das luvas', entrega: '2021-02-23', qtde: 5, un: 'Un', num: 'G', subst: false, epi_novo: true, rec_treinam: true, tp_entrega: 'Assinatura', actions: ['detalhar', 'atender'], detalhe: 'Detalhar', atende: 'abrir outra modal' },
    ];
  }

  getSituationOptions() {
    return [
      { value: '1', label: 'Entrega não realizada' },
      { value: '2', label: 'Nec. Subst' }
    ];
  }

  // resetFilterHiringProcess() {
  //   return this.getItems();
  // }

  execProcedureTeste(data_send) {
    let url = this.baseUrl + 'api-crud-epi';

    let headers_send = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    );

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        (response) => {
          console.log('sucessooooooooo', response);
          return null;
        },
        (error) => {
          console.log('errooooooo', error);
          return null;
        }
      )

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

  }

  //API dos funcionários

  apiCrudFunc(data_send, success_func?, error_func?) {
    let url = this.baseUrl + 'api-crud-func';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }


  apiConsulDescEpi(data_send, success_func?, error_func?) {
    let url = this.baseUrl + 'api-consult-epi3';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }


  apiCrudEpiFunc(data_send, success_func?, error_func?) {
    let url = this.baseUrl + 'api-crudepi';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }

  apiConsultaEpi(success_func, error_func) {
    let url = this.baseUrl + 'api-consult-epi';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.get(url, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }

  apiConsultaFornecEpi(data_send, success_func, error_func) {
    let url = this.baseUrl + 'api-consult-fornec-epi';

    // let headers_send = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic " + btoa("maikon:Titi@01titi")
    //   }
    // );


    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post(url, data_send, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  postEpiDesc(params, success_func?, error_func?) {

    let url = this.baseUrl + 'api-consult-epi3'

    let headers_send = new HttpHeaders()
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"))
    headers_send = headers_send.append("Content-Type", "application/json")

    let params2 = {
      "tt-param-epi": params
    }

    return this.http.post(url, params2, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
      .subscribe(
        success_func,
        error_func
      )
  }
}
