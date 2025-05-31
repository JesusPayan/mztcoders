import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ImagePath } from '../utils/ImagesPath';
import { CourseInfo } from '../utils/CourseInfo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacus.component.html',
  styleUrl: './contacus.component.css'
})
export class ContacusComponent {
  mainInfo: CourseInfo[] = [
    { title: 'Contáctanos', description: 'Estamos aquí para ayudarte en tu camino hacia el éxito en el desarrollo de software.', imagePath: 'assets/images/logo-removebg-preview.png' }
  ];

   contentInfo: CourseInfo[] = [
    {
       title: 'Puedes contactarnos a través de nuestro correo: mztcoders@gmail.com o haciendo clic en el siguiente enlace', description: 'mailto:mztcoders@gmail.com', imagePath: 'assets/images/gmail-logo.png' },
      { title: 'Llámanos 6691429322 para hablar con uno de nuestros asesores y brindarte asesoramiento personalizado', description: '', imagePath: 'assets/images/phone.jpg' },
      { title: 'Envíanos un mensaje por WhatsApp al 6691429322 o haz clic en el siguiente enlace', description: 'https://wa.me/526691429322', imagePath: 'assets/images/whats.jpg' },
      { title: 'Síguenos en Facebook para estar al tanto de nuestras novedades y eventos.', description: '', imagePath: 'assets/images/Facebook-logo.png' },
      // { title: 'Síguenos en TikTok para ver nuestro contenido visual y actualizaciones.', description: '', imagePath: 'assets/images/tiktok.png' }
   ];
     
   
}
