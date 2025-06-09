import { Routes } from '@angular/router';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';  
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentPaymentPageComponent } from './student-payment-page/student-payment-page.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoursesDashboardPageComponent } from './courses-dashboard-page/courses-dashboard-page.component';

export const routes: Routes = [
    { path: 'who-we-are', component: WhoweareComponent },
    { path: 'contac-us', component: ContacusComponent },
    { path: 'learning-path', component:   CoursesPageComponent },
    { path: 'sign-up', component:   SignUpComponent },
    { path: 'home-page', component:    HomePageComponent },
    { path: 'news-page', component:    NewsPageComponent },
    { path: 'login-page', component:   LoginPageComponent },
    { path: 'student-dashboard', component:   StudentDashboardComponent},
    {path:  'admin-dashboard-page', component: AdminDashboardComponent},
    {path : 'student-payment-page', component: StudentPaymentPageComponent},
    {path: 'courses-page', component: CoursesPageComponent},
    {path: 'courses-dashboard-page', component: CoursesDashboardPageComponent},
    {path : '', redirectTo: '/home-page', pathMatch: 'full'}
  ]