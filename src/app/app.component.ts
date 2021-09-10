import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encurtador de URL';
  display:boolean=false;
  modal:boolean=false;
  carregamento = false;

}
