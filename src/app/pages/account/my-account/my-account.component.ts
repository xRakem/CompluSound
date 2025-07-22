import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

 
  usuarioActivo: any = {
    userName: 'Juan123',
    firstName: 'Juan',
    lastName: 'Rey',
    email: 'juan@gmail.com',
    password: 'tukituki',
    fotoUrl: '', // si tiene una URL, se mostrará la imagen
    numPost: 12,
    numSounds: 45,
    numThreads:  8,
    numDownloads: 10
  }

  
}
