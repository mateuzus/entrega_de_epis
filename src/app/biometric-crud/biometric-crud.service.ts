import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiometricCrudService {
  private baseUrl: string = environment.base_url_api;

  constructor(private http: HttpClient) { }



  apiCrudFunc(data_send, success_func, error_func){
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
    


    return this.http.post(url, JSON.stringify(data_send) , {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    } )
    .subscribe(
      success_func,
      error_func
    )
  }

}
