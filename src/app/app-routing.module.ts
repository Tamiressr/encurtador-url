import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrlListComponent } from './url/url-list.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Error404Component } from './error/error404.component';

const routes: Routes = [
    { path:'', component: LoginComponent, pathMatch:'full'},
    {path:'usuarios/:id/urls', component: UrlListComponent},
    {path:'usuarios', component: UsuarioComponent},
    {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
