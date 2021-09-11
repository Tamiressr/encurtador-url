import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Url } from "../model/url";

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  private url ='http://localhost:8080/usuarios';

  constructor(
    private httpClient:HttpClient
  ) { }

  retrieveUrls(id:number ): Observable<Url[]>{
    return this.httpClient.get<Url[]>(`${this.url}/${id}/urls`);
  }
}
