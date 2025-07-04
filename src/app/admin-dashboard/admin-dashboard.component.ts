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
      {cardTitle: 'Recursos', imagePath: 'fas fa-graduation-cap text-primary fs-1 mb-2', cardRoute: '/courses-page'},
      {cardTitle: 'Pagos', imagePath: 'fas fa-wallet text-success fs-2 mb-2', cardRoute: '/student-payment-page'},
      {cardTitle: 'Puntajes', imagePath: 'fas fa-users text-danger fs-2 mb-2', cardRoute: '/student-payment'},
      {cardTitle: 'Estadisticas', imagePath: 'fas fa-chart-line text-dark fs-2 mb-2', cardRoute: '/statistics-page'},
      {cardTitle: 'Asistencias', imagePath: 'fas fa-solid fa-check text-dark fs-2 mb-2', cardRoute: '/users-page'},
      {cardTitle: 'Finanzas', imagePath: 'fa-solid fa-coins', cardRoute: '/users-page'},
      {cardTitle: 'Soporte', imagePath: 'fas fa-solid fa-headphones text-warning fs-2 mb-2', cardRoute: '/student-courses'},

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

  switch (caller) {
    case 'Recursos':
        this.router.navigate(['/courses-dashboard-page']);
        break;
    case 'Pagos':
        // statements for value2
        this.router.navigate(['/student-payment-page']);
        break;
    case 'Puntajes':
        this.router.navigate(['/student-payment']);
        break;
    case 'Estadisticas':
        this.router.navigate(['/statistics-page']);
        break;
    case 'Asistencias':
        this.router.navigate(['/users-page']);
        break;
    case 'Finanzas':
        this.router.navigate(['/users-page']);
        break;  
    // ... more cases
    default:
        // statements if no case matches (optional)
        break;
}
  }
  logout(){
        this.authService.logout();
        this.router.navigate(['/home-page']);
      }

  }



