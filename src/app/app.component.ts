import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CompluSound';
  
  isLogin: boolean = false;

  cambiarMenuLogin(val: boolean){
    this.isLogin = val;
  }

  constructor(private _router: Router){ }

  isActive(route: string): boolean{
    return this._router.url === route;
  }
}
