import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Student } from '../services/student.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { TopNavBarComponent } from '../top-nav-bar/top-nav-bar.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatListModule, MatDividerModule, FormsModule,],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {


logoUrl = 'assets/images/logo-removebg-preview.png'; 
constructor(private router: Router, ) {}
   student: Student = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  email: any;
  password: any;
  login(){
    if (!this.student.email || !this.student.password) {
      alert('Faltan campos por llenar');
      return;
    }else{
      console.log('usuario: ' + this.student.email + ' contraseña: ' + this.student.password);
      // alert('usuario: ' + this.student.email + ' contraseña: ' + this.student.password);
      this.student = {
        id: 1, 
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        password: 'password123'
      };
        
      this.router.navigate(['/student-dashboard']);
    }
  }

}
