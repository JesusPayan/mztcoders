import { Routes } from '@angular/router';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
export const routes: Routes = [
    { path: 'who-we-are', component: WhoweareComponent },
    { path: 'contac-us', component: ContacusComponent },
    { path: 'learning-path', component:   CoursesPageComponent },
  ]