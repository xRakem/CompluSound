import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.css'
})
export class UpdateAccountComponent implements OnInit{
 
 formularioAccount: FormGroup;
  
  usuarioActivo: any = {
    userName: 'Patito',
    firstName: 'Juan',
    lastName: 'Rey',
    email: 'juan@gmail.com',
    password: 'tukituki'
  }

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


  /*este metodo cunado se inicia el componente pondra un ejemplo para editar hay que traerlo del backend*/ 

  ngOnInit(): void{
    this.formularioAccount.patchValue({
      userName: this.usuarioActivo.userName,
      firstName: this.usuarioActivo.firstName,
      lastName: this.usuarioActivo.lastName,
      email: this.usuarioActivo.email,
      password: this.usuarioActivo.password,
      confirmPass: this.usuarioActivo.password
    })
  }

  hasErrors( controlName: string, errorType: string){
    return this.formularioAccount.get(controlName)?.hasError(errorType) && this.formularioAccount.get(controlName)?.touched;
  }

  enviar(){
   console.log(this.formularioAccount);
  }




}
