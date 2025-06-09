import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { StudentService, Student } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { MatSnackBar,MatSnackBarConfig  } from '@angular/material/snack-bar';
import { ToastComponent } from '../utils/toast/toast.componet';
import { LinkRoute } from '../utils/LinkRoute';
import { Elements } from '../utils/Element';

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

  imgToShow: LinkRoute[] = [
    { path: 'logo', label: 'assets/images/logo-removebg-preview.png' }
  ];


  // onSubmit(form: any) {
 registrer() {
   console.log(this.student);
   const toast = new ToastComponent(this.toast);   
    if (!this.student.name || !this.student.email || !this.student.phone) {
      console.log('Faltan campos por llenar');
      //alert('Faltan campos por llenar');
       toast.showToast('Faltan campos por llenar','error','error');
       confirm('Faltan campos por llenar');
      //  alert('Faltan campos por llenar');

      
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
        confirm(this.respuesta.message);
      },
      error: (error) => {
        toast.showToast(error, 'error', 'error');
        console.error(error);
      }
    });
    alert(this.data());
  }
}