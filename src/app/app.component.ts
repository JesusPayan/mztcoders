import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ContacusComponent } from './contacus/contacus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentPaymentPageComponent } from './student-payment-page/student-payment-page.component';
import { LinkRoute } from './utils/LinkRoute';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FooterPageComponent } from "./footer-page/footer-page.component";
import { LeftSideComponentComponent } from "./left-side-component/left-side-component.component"; // Import NoopAnimationsModule for no animations


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopNavBarComponent, CommonModule, RouterLink, RouterOutlet, MatToolbarModule, MatIconModule, WhoweareComponent, ContacusComponent, LoginPageComponent, StudentDashboardComponent, FooterPageComponent, LeftSideComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Define an interface for route links

// Example usage of the interface
export class AppComponent {


public isLoggedIn = false;
 
  title = 'mztcoders';
  isAuthenticated = true; 
}