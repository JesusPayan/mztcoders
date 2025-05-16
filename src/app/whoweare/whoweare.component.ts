import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-whoweare',
  standalone: true,

imports: [CommonModule, MatDividerModule, MatListModule],
  templateUrl: './whoweare.component.html',
  styleUrl: './whoweare.component.css'
})
export class WhoweareComponent {
logoUrl = '/assets/images/logo-removebg-preview.png';
selfimgUrl = '/assets/images/who-we-are-self.jpg';
name = "Lic. Jesus Armando Hernadez Payan";
whoweareMessage = '¿Quiénes somos?';
constwhoweareDescription = 
'Smart Coders Academy nace por la necesidad de capital humano capacitado para el mundo laboral '+
'Soy Jesus Payan. Fundador e Instructor de la academia \ncon mas de 5 años de experencia en el sector ' 
introducingMySelf = "Soy una persona apasionada por la tecnología y el desarrollo de software, con amplia experiencia en backend, arquitectura de sistemas y enseñanza. Actualmente lidero una academia de programación donde impulso el crecimiento profesional de nuevos talentos a través de cursos prácticos y mentorías personalizadas."+
"He participado activamente en el desarrollo de aplicaciones web modernas, aplicando principios SOLID, buenas prácticas de seguridad y arquitecturas basadas en microservicios. Además, apoyo a equipos técnicos mediante entrevistas, formación y resolución de incidencias con ayuda de herramientas de Inteligencia Artificial Generativa."+
"Mi misión es transformar el aprendizaje en una experiencia accesible, práctica y alineada a las necesidades reales del mundo laboral."
  // Nos dedicamos a crear soluciones digitales que transforman ideas en realidades. Nuestro objetivo es brindar un servicio de 
}
