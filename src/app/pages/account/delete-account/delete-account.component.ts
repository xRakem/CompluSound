import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.css'
})
export class DeleteAccountComponent {

  constructor( private _router: Router) {}

  borrarCuenta() {
      // Aquí iría la lógica para enviar la solicitud al backend
      console.log("Tu cuenta ha sido eliminada.");
      // Puedes redirigir o cerrar sesión después
       // Redirige y recarga
      this._router.navigate(['/account/login']).then(() => {
        window.location.reload(); // fuerza recarga de la app
      });
      
  }

}
