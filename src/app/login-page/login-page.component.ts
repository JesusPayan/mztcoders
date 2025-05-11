import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {

  email: any;
  password: any;
  login(){
    if (!this.email || !this.password) {
      alert('Faltan campos por llenar');
      return;
    }
    this.email = document.getElementById('email');
    this.password = document.getElementById('password');
    alert('usuario: ' + this.email.value + ' contraseña: ' + this.password.value);
    // this.email  = this.loginForm.value.email;
    // this.password  = this.loginForm.value.password;
  }

}
