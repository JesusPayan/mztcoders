import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ImagePath } from '../utils/ImagesPath';
import { CourseInfo } from '../utils/CourseInfo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacus',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contacus.component.html',
  styleUrl: './contacus.component.css'
})
export class ContacusComponent {
  mainInfo: CourseInfo[] = [
    { title: 'Contáctanos', description: 'Estamos aquí para ayudarte en tu camino hacia el éxito en el desarrollo de software.', imagePath: 'assets/images/logo-removebg-preview.png' }
  ];

   contentInfo: CourseInfo[] = [
      // { title: 'mztcoders@gmail.com', description: 'mailto:mztcoders@gmail.com', imagePath: 'assets/images/iconos/mail.svg' },
      { title: 'Llamanos', description: 'Llamanos', imagePath: 'assets/images/iconos/phone.svg' },
      { title: 'Escribanos', description: 'https://wa.me/526691429322', imagePath: 'assets/images/iconos/whatsapp.svg' },
      { title: 'Siguenos', description: '', imagePath: 'assets/images/iconos/facebook.svg' },
   ];
   saveOpinion(){
    alert("Se envio tu opinion")
   }
   
}
