import { Component } from '@angular/core';
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
@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, ],
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
    constructor(private router: Router, private appComponent: AppComponent) {}
    isLoggedIn = this.appComponent.isLoggedIn;

    linksToShow: LinkRoute[] = [];
    defaultlinks: LinkRoute[]  = [
      { path: 'home-page', label: 'Inicio' },
      { path: 'who-we-are', label: 'Conocenos' },
      { path: 'news-page', label: 'Noticias' },
      { path: 'learning-path', label: 'Oferta Educativa' },
      { path: 'contac-us', label: 'Contactanos' },
    ];
    loggedlinks: LinkRoute[]  = [
      { path: 'home-page', label: 'Inicio' },
      { path: 'student-dashboard', label: 'Panel de Estudiante' },
    ];
    imagesToShow: ImagePath[] = [
      
     { component: 'logo',path: 'assets/images/logo-removebg-preview.png' },
    ];


}
