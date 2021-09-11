import { Url } from './../model/url';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../model/usuario';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private url: string='http://localhost:8080/usuarios'
   urlNova:Url=new Url;
  constructor(
    private httpClient:HttpClient
  ) { }

  retrieveUrls(id:number ): Observable<Url[]>{
    return this.httpClient.get<Url[]>(`${this.url}/${id}/urls`);
  }


  save(usuario: Usuario):Observable<Usuario>{
    if(usuario.id){
      return this.httpClient.put<Usuario>(`${this.url}`, usuario);
  }
    else{
       return this.httpClient.post<Usuario>(`${this.url}`, usuario);
    }
  }

  encurtarUrl(usuario: Usuario, url:string):Observable<Url>{
    this.urlNova.url=url;
    usuario.urls.push(this.urlNova);
    return this.httpClient.put<Usuario>(`${this.url}/${usuario.id}`, usuario);
  }

}
