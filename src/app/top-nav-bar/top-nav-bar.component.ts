import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs'
import { LinkRoute } from '../utils/LinkRoute';
import { Student } from '../services/student.service';
import { AppComponent } from '../app.component';
import { ImagePath } from '../utils/ImagesPath';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'; 
import { AuthService } from '../model/auth.service';
@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, ],
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
    constructor(private router: Router, private appComponent: AppComponent, private authService:AuthService) {}
    isMenuOpen = false;
    isLoggedIn = false;
    userRole: string | null = null;
    userName: string | null = null;
       ngOnInit(){
      this.authService.isAuthenticated$.subscribe(status => {
        this.isLoggedIn = status;
      });
       this.authService.userRole$.subscribe(role => {
      this.userRole = role;
    });
      this.authService.userName.subscribe(name => {
      this.userName = name;
    });
    
  }
  closeMenu() {
    this.isMenuOpen = false;
  }  
  

      logout(){
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigate(['/home-page']);
      }
    
      linksToShow: LinkRoute[] = [];
    defaultlinks: LinkRoute[]  = [
      { path: 'home-page', label: 'Inicio' },
      { path: 'who-we-are', label: 'Conocenos' },
      { path: 'news-page', label: 'Noticias' },
      { path: 'learning-path', label: 'Oferta Educativa' },
      { path: 'contac-us', label: 'Contactanos' },
    ];
    studentLinks: LinkRoute[]  = [
      { path: 'student-dashboard', label: 'Inicio' },
      { path: 'student-payment-page', label: 'Pagos' },
      { path: 'courses-dashboard-page', label: 'Recursos' },
      { path: 'student-payment-page', label: 'Puntajes'},
      { path: 'student-payment-page', label: 'Certificados'},
      { path: 'assistance-page', label: 'Asistencia'},
      { path: 'student-payment-page', label: 'Incidentes'},

    ];
    adminLinks: LinkRoute[]  = [
      { path: 'admin-dashboard-page', label: 'Inicio' },
      { path: 'admin-dashboard-page', label: 'Panel de Administracion' },

    ];
    imagesToShow: ImagePath[] = [
      
     { component: 'logo',path: 'assets/images/logo-removebg-preview.png' },
     {component:'logOut',path:'assets/images/salida.png'}
    ];

     }

  

