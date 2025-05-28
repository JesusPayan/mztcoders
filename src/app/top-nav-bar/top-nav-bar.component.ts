import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs'
import { LinkRoute } from '../utils/LinkRoute';
import { Student } from '../services/student.service';
@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, ],
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
    show = false;
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
    imageUrl = 'assets/images/logo-removebg-preview.png';
    public loggedIn = new BehaviorSubject<boolean>(true);
    loggedIn$ = this.loggedIn.asObservable();

   
    // private loggedIn = new BehaviorSubject<boolean>(false)
    // loggedIn$ = this.loggedIn.asObservable()
    // constructor(private router: Router) {
    //   this.linksToShow = this.defaultlinks;
    //   this.router.events.subscribe(() => {
    //     if (this.router.url === '/login-page') {
    //       this.linksToShow = this.defaultlinks;
    //     } else if (this.router.url === '/sign-up') {
    //       this.linksToShow = this.defaultlinks;
    //     }
}
