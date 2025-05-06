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
whoweareMessage = '¿Quiénes somos?';
constwhoweareDescription = 
'Smart Coders Academy nace por la necesidad de capital humano capacitado para el mundo laboral '+
'Soy Jesus Payan. Fundador e Instructor de la academia \ncon mas de 5 años de experencia en el sector ' 
  // Nos dedicamos a crear soluciones digitales que transforman ideas en realidades. Nuestro objetivo es brindar un servicio de 
}
