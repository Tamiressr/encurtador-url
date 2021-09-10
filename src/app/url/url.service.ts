
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Url } from "./url";


@Injectable({
  providedIn:"root"
})
export class UrlService{

private url:string='http://localhost:8080/usuarios'

constructor(private httpClient:HttpClient){

}
retrieveUrls(id:number ): Observable<Url[]>{

  return this.httpClient.get<Url[]>(`${this.url}/${id}/urls`);
  }


}


