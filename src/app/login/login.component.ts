import { Component } from "@angular/core";
import { Usuario } from "../model/usuario";

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html'
})
export class LoginComponent{
usuario:Usuario=new Usuario;

}
