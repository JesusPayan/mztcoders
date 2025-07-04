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


  studentImage = '/assets/images/logo-removebg-preview.png';
  studentName = 'Juan Perez Lopez';
  logoUrl = '/assets/images/logo-removebg-preview.png';
  constructor(private authService: AuthService, private router: Router) {}
 
userName: string | null = null;
paymentStatus: string | null = null;
semaphores: string[] = ['warning','success','danger','info'];
semaphore:string ='';
mainInfo: CourseInfo[] = [
   {title:'Panel de Estudiante', description:'Aquí podrás encontrar toda la información relacionada con tu progreso académico, pagos y más. Explora las diferentes secciones para aprovechar al máximo tu experiencia de aprendizaje.', imagePath:'assets/images/logo-removebg-preview.png'}, 
  ]
  linkscards:DashboardCard[] = [
    {cardTitle: 'Progreso', imagePath: 'assets/images/estadisticas.png', cardRoute: '/'},
    {cardTitle: 'Puntaje', imagePath: '/assets/images/trofeo.png', cardRoute: '/student-payment'},
    {cardTitle: 'Pagos', imagePath: '/assets/images/monedas.png', cardRoute: '/'},
    {cardTitle: 'Recursos', imagePath: '/assets/images/capas.png', cardRoute: '/show-resourse-detail'},
  ];

  ngOnInit(): void {

   this.authService.userName.subscribe(name => {
      this.userName = name;
    });
    
    this.paymentStatus =  localStorage.getItem('paymentStatus');
     if (this.paymentStatus === null || this.paymentStatus === undefined) {
      this.paymentStatus = 'No payment status available';
    }else if (this.paymentStatus=== 'Vigente'|| this.paymentStatus === 'CORRIENTE') {
      this.semaphore = 'success';
    }
   
  }

  openModal(caller:string){
alert(caller);
 if(caller === 'Recursos'){
    this.router.navigate(['/courses-dashboard-page']);
  }
   if(caller === 'Pagos'){
    this.router.navigate(['/student-payment-page']);
  }
  }
  logout(){
        this.authService.logout();
        this.router.navigate(['/home-page']);
      }
}