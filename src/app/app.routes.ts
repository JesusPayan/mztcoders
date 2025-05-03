import { Routes } from '@angular/router';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';

export const routes: Routes = [
    { path: 'whoweare', component: WhoweareComponent },
    { path: 'contacus', component: ContacusComponent },
  ]