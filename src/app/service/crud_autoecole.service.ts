import { Injectable } from '@angular/core';

import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { auto_ecole } from './auto_ecole';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  REST_API: string = 'http://127.0.0.1:8000/api/autoecole';

  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient: HttpClient) { }

addautoecole(data:auto_ecole): Observable<any>{
  let API_URL =  `${this.REST_API}`;
  return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
}


getauto_ecoles(){
  return this.httpClient.get(`${this.REST_API}`);
}

getauto_ecole(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handleError))
  }

  update_autoecole(id: any, data: auto_ecole): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }

  delete_autoecole(id: any ): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL,  { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
