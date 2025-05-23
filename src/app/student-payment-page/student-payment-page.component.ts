// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Student } from '../services/Student';

// import {Component} from '@angular/core';
// import {toSignal} from '@angular/core/rxjs-interop';
// import {FormBuilder, FormControl, ReactiveFormsModule,NgForm} from '@angular/forms';
// import {MatCheckboxModule} from '@angular/material/checkbox';

// import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatTableModule} from '@angular/material/table'; //MatTableModule

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
 
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Component({
//   selector: 'app-student-payment-page',
//   templateUrl: './student-payment-page.component.html',
//   styleUrls: ['./student-payment-page.component.css'],
//   standalone: true // <- Asegúrate de que esto esté
// })
// export class StudentPaymentPageComponent {
//    student: Student = {
//     name: 'Juan Perez Lopez',
//     email: '',
//     phone: ''
//   };

// displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
//   registrePayment(){
//     console.log('Entrada de datos');
//     alert('¡ Pago registrado con Exito !\n Se enviara un recibo a su correo.\n Gracias por su pago');
//   }

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Student } from '../services/Student';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-student-payment-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatTableModule
  ],
  templateUrl: './student-payment-page.component.html',
  styleUrls: ['./student-payment-page.component.css']
})
export class StudentPaymentPageComponent {

  selectedFile:File | null = null;
  currentDate = new Date();
  amount: boolean = false; 
  student: Student = {
    name: 'Juan Perez Lopez',
    email: '',
    phone: ''
  };

   constructor(private http: HttpClient) {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  type: any;
  selectedValue: any;
  activate:boolean = false;

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
  }
  onSubmit(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8080/api/files/upload', formData).subscribe({
      next: (response) => {
        console.log('Archivo enviado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al enviar archivo:', error);
      }
    });
  }
}

