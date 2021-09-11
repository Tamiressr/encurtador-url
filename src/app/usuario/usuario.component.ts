import { Usuario } from '../model/usuario';
import { Component, OnInit } from "@angular/core";
import { UsuarioServiceService } from '../service/usuario-service';
import { ActivatedRoute } from "@angular/router";
import { Url } from '../model/url';

@Component({
 templateUrl:'./usuario.component.html'
})
export class UsuarioComponent implements OnInit{

_urlsUsuario: Url[]=[];
usuario: Usuario = new Usuario;
login: string="";
senha: string="";


  constructor(
    private usuarioService: UsuarioServiceService,
    private activateRoute:ActivatedRoute
    ){ }
    
  ngOnInit():void{
   // this.usuario.id=+this.activateRoute.snapshot.paramMap.get('id')!;
    //this.retornarUrls(this.usuario.id);
  }

retornarUrls(id:number):any{
  this.usuarioService.retrieveUrls(id).subscribe({
    next:usuarios=>{
      this._urlsUsuario=usuarios;
    }
    ,error:err=>{
      console.log('Error',err);
    }
  });
  console.log(this._urlsUsuario);
}
save():void{
  this.usuario.login=this.login;
  this.usuario.senha=this.senha;
  this.usuarioService.save(this.usuario).subscribe({
    next:usuario=>{
      this.usuario=usuario;
    },
    error: err=>{
      console.log('Error',err);
    }
  });

}




}
