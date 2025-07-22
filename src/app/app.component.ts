import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UpdateAccountComponent } from "./pages/account/update-account/update-account.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  title = 'CompluSound';
  
  isLogin: boolean = false;
 
  usuario = {
      nombre: 'Juan',
      fotoUrl: '' // si tiene una URL, se mostrará la imagen
  };

  cambiarMenuLogin(val: boolean){
    this.isLogin = val;
  }


  constructor(private _router: Router){ }

  isActive(route: string): boolean{
    return this._router.url === route;
  }

 
}
