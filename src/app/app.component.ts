import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule,  RouterLink, WhoweareComponent, ContacusComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'mztcoders';
  welcomeMessage ='Bienvenido a Smarts Coders'  
  logoUrl = 'assets/images/logo-removebg-preview.png'; 
  one = 'assets/images/1.png';
  two = 'assets/images/2.png';
  three = 'assets/images/3.png'; 

  currentYear = new Date().getFullYear();
  backgroundImageUrl  = 'assets/images/backgroung.png'; 
}
