import { Component, NgModule, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { StudentPaymentPageComponent } from '../student-payment-page/student-payment-page.component';
import { AppComponent } from '../app.component';
import { AuthService } from '../model/auth.service';
import { CourseInfo } from '../utils/CourseInfo';
import { Router } from '@angular/router';
import { DashboardCard } from '../utils/DashboardCard.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
   standalone: true,
  imports: [MatExpansionModule, MatProgressBarModule, MatDividerModule,CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})

export class StudentDashboardComponent implements OnInit {
  // sidenav = document.getElementById("mySidenav");

  studentImage = '/assets/images/logo-removebg-preview.png';
  studentName = 'Juan Perez Lopez';
  logoUrl = '/assets/images/logo-removebg-preview.png';
  constructor(private authService: AuthService, private router: Router) {}
 
userName: string | null = null;

 mainInfo: CourseInfo[] = [
   {title:'Panel de Estudiante', description:'Aquí podrás encontrar toda la información relacionada con tu progreso académico, pagos y más. Explora las diferentes secciones para aprovechar al máximo tu experiencia de aprendizaje.', imagePath:'assets/images/logo-removebg-preview.png'}, 
  ]
  linkscards:DashboardCard[] = [
    {cardTitle: 'Progreso', imagePath: 'assets/images/estadisticas.png', cardRoute: '/student-courses'},
    {cardTitle: 'Puntaje', imagePath: '/assets/images/trofeo.png', cardRoute: '/student-payment'},
    {cardTitle: 'Pagos', imagePath: '/assets/images/monedas.png', cardRoute: '/'},
    {cardTitle: 'Lecciones', imagePath: '/assets/images/capas.png', cardRoute: '/student-courses'},
    {cardTitle: 'Actividades', imagePath: '/assets/images/lapiz.png', cardRoute: '/student-courses'},
    // {cardTitle: 'Mis Cursos', imagePath: '/assets/images/courses.png', cardRoute: '/student-courses'},
    // {cardTitle: 'Mis Cursos', imagePath: '/assets/images/courses.png', cardRoute: '/student-courses'},
    // {cardTitle: 'Mis Cursos', imagePath: '/assets/images/courses.png', cardRoute: '/student-courses'},
  ];

  ngOnInit(): void {

   this.authService.userName.subscribe(name => {
      this.userName = name;
    });
  }

  openModal(caller:string){
  alert(caller);
  }
  logout(){
        this.authService.logout();
        this.router.navigate(['/home-page']);
      }
}