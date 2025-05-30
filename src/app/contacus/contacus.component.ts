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
       title: 'Email', description: 'Puedes contactarnos a través de nuestro correo electrónico: contacto@mztcoders.com', imagePath: 'mailto:mztcoders@gmail.com' },
      { title: 'Teléfono', description: 'Llámanos al +52 6691429322 para hablar con uno de nuestros asesores.', imagePath: 'tel:+526691429322' },
      { title: 'WhatsApp', description: 'Envíanos un mensaje por WhatsApp al +52 6691429322 para una respuesta rápida.', imagePath: 'https://wa.me/526691429322' },
      { title: 'Facebook', description: 'Síguenos en Facebook para estar al tanto de nuestras novedades y eventos.', imagePath: 'https://www.facebook.com/mztcoders' },
      { title: 'Instagram', description: 'Síguenos en Instagram para ver nuestro contenido visual y actualizaciones.', imagePath: 'https://www.instagram.com/mztcoders/' }
   ];
     
   
}
