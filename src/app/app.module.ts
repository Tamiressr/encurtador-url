import { Error404Component } from './error/error404.component';
import { UrlListComponent } from './url/url-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    LoginComponent,
    NavBarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     { path:'',component:LoginComponent,pathMatch:'full'},
     {path:'usuarios/:id/urls',component:UrlListComponent},
     {path:'usuarios',component:UsuarioComponent},
     {path:'**',component:Error404Component}

    ]),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
