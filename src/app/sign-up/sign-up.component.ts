// import { Component,viewChild } from '@angular/core';
// import { AppComponent } from '../app.component';
// import { on } from 'events';
// import { ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import {StudentService } from '../services/student.service';
// import { Student } from '../services/Student';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-sign-up',
//   standalone: true,
//   imports: [],
//   templateUrl: './sign-up.component.html',
//   styleUrl: './sign-up.component.css'
// })

// export class SignUpComponent {
//    appComponent = new AppComponent();
//    email: any;
//    name: any;
//    phone: any;
   
//     constructor(private studentService: StudentService) { }
//   onSubmit() {}
//    registrer(){ 
//      this.email = document.getElementById('email');
//      this.name = document.getElementById('name');
//      this.phone = document.getElementById('phone');
//      if (!this.email || !this.name || !this.phone) {
//        alert('Faltan campos por llenar');
//        return;
//      }else{

//       this.studentService.addStudent(new Student(this.name.value, this.email.value, this.phone.value)).subscribe();
    

//      alert  ('Registrado');
//    }
//   }
// }
  

import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { StudentService, Student } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { MatSnackBar,MatSnackBarConfig  } from '@angular/material/snack-bar';
import { ToastComponent } from '../utils/toast/Toast.componet';

@Component({
  selector: 'app-sign-up',
  template: `
    <button (click)="showToast()">Show Toast</button>
  `,
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
data: any;
respuesta: any;
// se guarda el JWT en el localStorage
  // Example method to set token in localStorage
  setToken(response: { token: string }): void {
    localStorage.setItem('token', response.token);
  }

  student: Student = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private studentService: StudentService, private toast: MatSnackBar) {}

  // onSubmit(form: any) {
 registrer() {
   console.log(this.student);
   const toast = new ToastComponent(this.toast);   
    if (!this.student.name || !this.student.email || !this.student.phone) {
      //alert('Faltan campos por llenar');
       toast.showToast('Faltan campos por llenar','error','error');
      return;
    }
    const newPost = { title: 'Nuevo post', body: 'Contenido...', userId: 1 };
  
   this.studentService.addStudent(this.student).subscribe({
      next: (data) => {
        this.respuesta = data; // Asigna la respuesta a la propiedad
        console.log('Respuesta recibida:', this.respuesta);
        if (this.respuesta.message == 'Estudiante Guardado con Exito') {
          toast.showToast(this.respuesta.message, 'success', 'success');
          toast.showToast('Se envio un con la contraseña al correo registrado', 'info', 'info');
        }if(this.respuesta.message == 'Estudiante ya registrado'){
          toast.showToast(this.respuesta.message, 'error', 'error');
        }if(this.respuesta.statusCode in['503', '500','504','502']){
          toast.showToast("Error en el servidor, intente mas tarde", 'error', 'error');
        }
          
        
      },
      error: (error) => {
        toast.showToast(error, 'error', 'error');
        console.error(error);
      }
    });
    alert(this.data());
  }
}