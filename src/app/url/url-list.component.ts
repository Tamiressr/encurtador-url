import { Usuario } from './../usuario/usuario';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Url } from "./url";
import { UsuarioService } from '../usuario/usuario.service';
@Component({
templateUrl:'./url-list.component.html'
})
export class UrlListComponent implements OnInit{

  usuario:Usuario=new Usuario;
  _urlsUsuario: Url[]=[];
  url:Url=new Url;
  urlOriginal:string="";

 urlEncurtada:string="";
  constructor(private usuarioService: UsuarioService,private activateRoute:ActivatedRoute){

  }
  ngOnInit():void{
    this.usuario.id=+this.activateRoute.snapshot.paramMap.get('id')!;
    this.retornarUrls(this.usuario.id);
  }

retornarUrls(id:number):any{
  this.usuarioService.retrieveUrls(id).subscribe({
    next:usuarios=>{
      this._urlsUsuario=usuarios;
    },error:err=>console.log('Error',err)
  })
  console.log(this._urlsUsuario);
}
encurtarUrl():any{
  /**
   * this.usuarioService.encurtarUrl( this.usuario.id,this.urlOriginal).subscribe({
    next:url=>{
      this.url=url;
    },error:err=>console.log('Error',err)
  })
   */

  console.log(this._urlsUsuario);
}




}
