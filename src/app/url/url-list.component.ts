import { Usuario } from '../model/usuario';
import {  Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Url } from "../model/url";
import { UsuarioServiceService } from '../service/usuario-service';

@Component({
templateUrl:'./url-list.component.html'
})
export class UrlListComponent implements OnInit{

  usuario:Usuario=new Usuario;
  _urlsUsuario: Url[]=[];
  url:Url=new Url;
  urlOriginal:string="";

 urlEncurtada:string="";
 public _reload=false;

 private reload() {
     setTimeout(() => this._reload = true);
     this.retornarUrls(this.usuario.id!);

 }
  constructor(
    private usuarioService: UsuarioServiceService,
    private activateRoute:ActivatedRoute){



    }
    /**
     */

    ngOnInit():void{
      this.usuario.id=+this.activateRoute.snapshot.paramMap.get('id')!;
    this.retornarUrls(this.usuario.id);

  }
retornarUrls(id:number):any{

  setTimeout(() => this._reload = true);
  this.usuarioService.retrieveUrls(id).subscribe({
    next:urls=>{
      this._urlsUsuario=urls;

    },error:err=>console.log('Error',err)
  })


  console.log(this._urlsUsuario);
}



encurtarUrl():any{
    this.usuarioService.encurtarUrl( this.usuario,this.urlOriginal).subscribe({
    next:url=>{
      this.url=url;
    },error:err=>console.log('Error',err)

  })
    this.reload();

}

}
