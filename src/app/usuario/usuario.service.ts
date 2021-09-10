import { Usuario } from './usuario';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Url } from '../url/url';



@Injectable({
  providedIn:'root'
})
export class UsuarioService{

private url:string='http://localhost:8080/usuarios'


constructor(private httpClient:HttpClient){

}
retrieveUrls(id:number ): Observable<Url[]>{

return this.httpClient.get<Url[]>(`${this.url}/${id}/urls`);
}


save(usuario:Usuario):Observable<Usuario>{
if(usuario.id){
  return this.httpClient.put<Usuario>(`${this.url}`,usuario);
}
else{
  return this.httpClient.post<Usuario>(`${this.url}`,usuario);
}

}
encurtarUrl(id:number,url:string){
//criar url
//mandar salvar
 // return this.httpClient.put<Usuario>(`${this.url}`,usuario);
}
}
