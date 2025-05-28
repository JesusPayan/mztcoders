import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentPaymentPageComponent } from './student-payment-page/student-payment-page.component';
import { LinkRoute } from './utils/LinkRoute';
import { BehaviorSubject } from 'rxjs'
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { Student } from './services/Student';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TopNavBarComponent, CommonModule, RouterLink, RouterOutlet, MatToolbarModule, MatIconModule, WhoweareComponent, ContacusComponent, LoginPageComponent, StudentDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Define an interface for route links

// Example usage of the interface
export class AppComponent {
// LoggedStudent:Student = {
//   id: 0,
//   name: '',
//   email: '',
//   phone: '',
//   password: '',
// }


 
  title = 'mztcoders';
  welcomeMessage ='Bienvenido a Smarts Coders'  
  logoUrl = 'assets/images/logo-removebg-preview.png'; 
  one = 'assets/images/1.png';
  two = 'assets/images/2.png';
  three = 'assets/images/3.png'; 

  currentYear = new Date().getFullYear();
  backgroundImageUrl  = 'assets/images/backgroung.png'; 
  isAuthenticated = true; 
}
//   linksToShow: LinkRoute[] = [];
//   defaultlinks: LinkRoute[]  = [
//     { path: 'home-page', label: 'Inicio' },
//     { path: 'who-we-are', label: 'Conocenos' },
//     { path: 'news-page', label: 'Noticias' },
//     { path: 'learning-path', label: 'Oferta Educativa' },
//     { path: 'contac-us', label: 'Contactanos' },
//   ];
//   loggedlinks: LinkRoute[]  = [
//     { path: 'home-page', label: 'Inicio' },
//     { path: 'student-dashboard', label: 'Panel de Estudiante' },
//   ];
 
//   title = 'mztcoders';
//   welcomeMessage ='Bienvenido a Smarts Coders'  
//   logoUrl = 'assets/images/logo-removebg-preview.png'; 
//   one = 'assets/images/1.png';
//   two = 'assets/images/2.png';
//   three = 'assets/images/3.png'; 

//   currentYear = new Date().getFullYear();
//   backgroundImageUrl  = 'assets/images/backgroung.png'; 

//   shownavbar(show: boolean) {
  
  
  
// }
// }