import { Routes } from '@angular/router';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';  
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
export const routes: Routes = [
    { path: 'who-we-are', component: WhoweareComponent },
    { path: 'contac-us', component: ContacusComponent },
    { path: 'learning-path', component:   CoursesPageComponent },
    { path: 'sign-up', component:   SignUpComponent },
    { path: 'home-page', component:    HomePageComponent },
    { path: 'news-page', component:    NewsPageComponent },
    {path : '', redirectTo: '/home-page', pathMatch: 'full'}
  ]