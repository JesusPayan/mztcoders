

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Student } from '../services/Student';
import { Payment } from '../services/Payment';
import { Observable } from 'rxjs';
import { PaymentService } from '../services/paymentservice';
import { StudentService } from '../services/student.service';
import { AuthService } from '../model/auth.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { PaymentObjetc } from '../model/Payment.interface';





@Component({
  selector: 'app-student-payment-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatTableModule,
  ],
  templateUrl: './student-payment-page.component.html',
  styleUrls: ['./student-payment-page.component.css']
})
export class StudentPaymentPageComponent {

  // Declaracion de variables 
      currentDate: Date = new Date();
      amount: any;
      selectedFile: any;
      newPayment: PaymentObjetc = {  id: 0,  user: 0,  paymentAmount: 0,  paymentDate: new Date(),  datos: null,  paymentStatus: '',  paymentDif: 0,nextPaymentDate: new Date() };
      studentPayments: PaymentObjetc[] = [];
      
listStudents: Student[] = [];
      student: Student = {
        id: 0,
        name: '',
        email: '',      
        phone: '',
        password: '',
        role: '',
        picture: '',
        paymentStatus: 'No payment status available'
      };
      enable:boolean = false;
      isLoggedIn = false;
      userRole: string | null = null;
      userName: string | null = null;
      userEmail: string | null = null;
      userID:string | null = null;
      type: any;
      respuesta: any;
    
  studentPaymentList: PaymentObjetc[] = [];
  selectedValue: any;
  activate:boolean = false;
  // constructor de la clase
  constructor(private router: Router, private appComponent: AppComponent, private authService:AuthService, private paymentService: PaymentService, private http: HttpClient , private studentService: StudentService) {}
    //Inicializacion del componente
    ngOnInit(){
          this.authService.isAuthenticated$.subscribe((status: boolean) => {
            this.isLoggedIn = status;
          });
           this.authService.userRole$.subscribe((role: string | null) => {
          this.userRole = role;
        });
          this.authService.userName.subscribe((name: string | null) => {
          this.userName = name;
        });
        this.authService.userEmail.subscribe((email: string | null) => {
          this.userEmail = email;
        });
        this.authService.userID.subscribe((userID: string | null) => {
          this.userID = userID;
        });
        //this.showPayments(Number(this.userID) || 0,this.userRole || '');
        console.log('Usuario autenticado:', this.isLoggedIn);
        console.log('Rol del usuario:', this.userRole);
        console.log('Nombre del usuario:', this.userName);
        console.log('Email del usuario:', this.userEmail);
        console.log('ID del usuario:', this.userID);
        if (!this.isLoggedIn) {
          this.router.navigate(['/login-page']);
        }
        if(this.userRole === 'ESTUDIANTE' || this.userRole === 'Estudiante'){
          this.showPayments(Number(this.userID) || 0, this.userRole || '');
        }else if(this.userRole === 'ADMIN' || this.userRole === 'Admin'){
          // this.paymentService.getAllPayments().subscribe({
          //   next: (data) => {
          //     console.log(data);
          //     this.respuesta = data;
          //     this.studentPayments = this.respuesta;
          //   },
          //   error: (error) =>{
          //     console.error(error);
          //   }
          // });
          this.studentService.getUsersByRole('ESTUDIANTE').subscribe({
            next: (data) => {
              console.log(data);
              this.respuesta = data;
              this.listStudents = this.respuesta.data;
            },
            error: (error) => {
              console.error(error);
            }
        });
        }

    }

     registrePayment() {
    console.log('Entrada de datos');
    alert('¡ Pago registrado con Éxito !\n Se enviará un recibo a su correo.\n Gracias por su pago');
  }
  message(){
    if(this.activate == false){
      this.activate = true;
    }else{
      this.activate = false;
    }
  }

  //Funcion para cargar el archivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
    this.previewImage(event);
  };

enableComponent(){
  if(this.enable == false){
    this.enable = true;
  }else{
    this.enable = false;
  }
}
ViewPaymentReceipt(){
  
}
sendPaymentReminder(){
  alert('Enviando recordatorio de pago al estudiante: ' + this.userName);
}
previewImage(event: any) {
     const file = event.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = (e: any) => {
         const preview = document.getElementById('preview') as HTMLImageElement;
         preview.src = e.target.result;
       };
       reader.readAsDataURL(file);
     }
   }

showPayments(id:number,role:string){
  //alert('Cargando pagos del estudiante con ID: ' + id);
  console.log('Cargando pagos del usuario: ' + this.userName + ' con el role: ' + this.userRole);
  if(this.userRole === 'ESTUDIANTE' || this.userRole === 'Estudiante'){
    this.paymentService.getPaymentsByStudentId(Number(this.userID) || 0).subscribe({
            next: (data) => {
              console.log(data);
              this.respuesta = data;
              this.studentPayments = this.respuesta;
            },
            error: (error) =>{
              console.error(error);
            }
          });
  }else if(this.userRole === 'ADMIN'){
    this.paymentService.getAllPayments().subscribe({
      next: (data) => {
        console.log(data);
        this.respuesta = data;
        this.studentPayments = this.respuesta;
      },
      error: (error) =>{
        console.error(error);
      }
    });
  }

}
    onSubmit(): void {

    if (!this.selectedFile){
      alert('Por favor, selecciona un archivo para enviar.');
      return;
    } else{
       console.log('servicio pára enviar el pago');
      
      const newPayment: PaymentObjetc = {  id: 0,  user: 0,  paymentAmount: 0,  paymentDate: new Date(),  datos: null,  paymentStatus: '',  paymentDif: 0.0};
      const paymentData = new FormData();

      paymentData.append('amount', String(this.amount));
      // paymentData.append('date',  new Date().toISOString()); //
      paymentData.append('studentId', (this.userID ?? 0).toString()); 
      paymentData.append('file', this.selectedFile);

      console.log(paymentData.get('amount'), this.userID, this.selectedFile);
      this.paymentService.registerPayment(paymentData).subscribe({
        next: (response) => {
          console.log('Pago registrado exitosamente:', response);
          alert('Pago registrado exitosamente');
          this.showPayments(Number(this.userID) || 0, this.userRole || '');
        },
        error: (error) => {
          console.error('Error al registrar el pago:', error);
          alert('Error al registrar el pago');
        }
        });
      

    
    }
     
    }





  }

  
 // 
