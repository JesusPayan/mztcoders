import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule,NgForm,NgModel  } from '@angular/forms';
import { AuthService } from '../model/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AssistanceService } from '../services/Assistance.services';
import { Injectable, Inject } from '@angular/core';


@Component({
  selector: 'app-confirm-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.css'
})

export class ConfirmPasswordComponent {

  constructor (
    private authService: AuthService,
    private dialog: MatDialog,
    @Inject(AssistanceService) private assistanceService: AssistanceService
    
  ) {}
  password: string = '';
  currentStudentPassword: string = '';
respuesta: any;
data: any;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.currentStudentPassword = this.authService.getpassword();

}
closeDialog() {
  this.dialog.closeAll();
}
  onSubmit(caller: string) { 
    if (caller === 'assistance') {
      if (this.password === localStorage.getItem('password')) {
        // console.log(localStorage.getItem('id'))
        this.assistanceService.registerAssistance(Number(localStorage.getItem('id'))).subscribe({
          next: (data: any) => {
              console.log("Informacion obtenida de la llamada al servicio" + data);
              this.respuesta = data;
              alert(this.respuesta.message);
            },
            error: (error: any) =>{
              console.error(error);
            }
          });
      this.dialog.closeAll();

    } else {
      alert('Contraseña incorrecta');
    }
    }
    
  }

}
