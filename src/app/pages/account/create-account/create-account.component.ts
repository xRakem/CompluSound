import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  formularioAccount: FormGroup;
  
  constructor(private from: FormBuilder ){ 
    this.formularioAccount = this.from.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]]
    });

  }
  
  //se puede anadir los validadores en cualquier otra funcion de la siguente forma
 /* ejemplo(){
     this.formularioLogin.get('user')?.setValidators([Validators.required, Validators.minLength(3)]);
  }
 */

  hasErrors( controlName: string, errorType: string){
    return this.formularioAccount.get(controlName)?.hasError(errorType) && this.formularioAccount.get(controlName)?.touched;
  }

  enviar(){
   console.log(this.formularioAccount);
  }

  

}
