/*import { Component,ChangeDetectionStrategy,  ChangeDetectorRef, } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup,Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { Student } from '../services/student.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { TopNavBarComponent } from '../top-nav-bar/top-nav-bar.component';
import { AuthService } from '../model/auth.service';
import { LoginCredentials } from '../model/login-credentials.interface';
import { catchError, EMPTY, finalize } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatListModule, MatDividerModule, FormsModule,],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class LoginPageComponent {
processingRequest = false;
email: string = '';
password: string = '';
 student: Student = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: ''
  };

logoUrl = 'assets/images/logo-removebg-preview.png'; 

  constructor(
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
 login() {
  if (!this.student.email || !this.student.password) {
    alert('Faltan campos por llenar');
    return;
  }else{
    this.authService.login(this.student.email, this.student.password).subscribe({
    next: (res) => {
      this.authService.saveSession(res.token, res.role);
      if (res.role === 'ADMIN') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    },
    error: () => alert('Credenciales incorrectas')
  });
  }
  

  }
}


*/


import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';
import { Student } from '../services/student.service';
import { LoginResponse } from '../utils/login-response.interface';
import {CommonModule} from '@angular/common';
// import { TopNavBarComponent } from '../top-nav-bar/top-nav-bar.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatListModule, MatDividerModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  processingRequest = false;
  //  @Input() topNavBarVisible = true; // 
  // Modelo vinculado con el formulario
  student: Student = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: ''
  };
      isLoggedIn = false;
  logoUrl = 'assets/images/logo-removebg-preview.png';

  constructor(
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    // private topNavBar: TopNavBarComponent
  ) {}

  onSubmit() {
    
    if (!this.student.email || !this.student.password) {
      alert('Faltan campos por llenar');
      return;
    }else{
      // this.processingRequest = true;


    this.authService.login(this.student.email, this.student.password).subscribe({
      next: (res: LoginResponse) => {
        console.log('Respuesta de autenticación:', res);
        this.authService.saveSession(res.token,res.role);
        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard-page']);
          alert("Bienvenido "+ res.data.name);
        } else {
          this.router.navigate(['/student-dashboard']);
          alert("Bienvenido "+ res.data.name);
        //  this.topNavBar.topNavBarVisible = false; 
        }
      },
      error: (err: any) => {
        console.error('Error de autenticación:', err);
        this.router.navigate(['/login-page']);
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigate(['/login-page']);
        alert('Credenciales incorrectas');


      }
      ,
      complete: () => {
        this.processingRequest = false;
        this.cdr.markForCheck();
      }
    });
  }
    }
   }

    
  

