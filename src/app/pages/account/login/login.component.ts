import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formularioLogin: FormGroup;
  
  constructor(private from: FormBuilder ){ 
    this.formularioLogin = this.from.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  
  //se puede anadir los validadores en cualquier otra funcion de la siguente forma
 /* ejemplo(){
     this.formularioLogin.get('user')?.setValidators([Validators.required, Validators.minLength(3)]);
  }
 */

  hasErrors( controlName: string, errorType: string){
    return this.formularioLogin.get(controlName)?.hasError(errorType) && this.formularioLogin.get(controlName)?.touched;
  }

  enviar(){
   console.log(this.formularioLogin);
  }

  

}
