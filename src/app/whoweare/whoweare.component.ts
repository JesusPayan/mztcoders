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
misionimgUrl = '/assets/images/mision.png';
visionimgUrl = '/assets/images/vision.png';
valoresimgUrl = '/assets/images/valores.png';
  // Nos dedicamos a crear soluciones digitales que transforman ideas en realidades. Nuestro objetivo es brindar un servicio de 
}
