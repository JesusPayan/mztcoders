import { Component } from '@angular/core';
import { CourseInfo } from '../utils/CourseInfo';
import { DashboardCard } from '../utils/DashboardCard.interface';
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  constructor(private authService: AuthService, private router: Router) {}
 
userName: string | null = null;
  mainInfo: CourseInfo[] = [
     {title:'Panel de Administrador', description:'Aquí podrás encontrar las herramientas para poder admisnistrar la plataforma.', imagePath:'assets/images/logo-removebg-preview.png'}, 
    ]
    linkscards:DashboardCard[] = [
      {cardTitle: 'Cursos', imagePath: 'assets/images/estadisticas.png', cardRoute: '/courses-page'},
      {cardTitle: 'Puntajes', imagePath: '/assets/images/trofeo.png', cardRoute: '/student-payment'},
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
  if(caller === 'Cursos'){
    this.router.navigate(['/courses-dashboard-page']);
  }
  }
  logout(){
        this.authService.logout();
        this.router.navigate(['/home-page']);
      }

  }



