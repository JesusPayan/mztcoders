import { Component, NgModule, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { StudentPaymentPageComponent } from '../student-payment-page/student-payment-page.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student-dashboard',
   standalone: true,
  imports: [MatExpansionModule, MatProgressBarModule, MatDividerModule, StudentPaymentPageComponent,AppComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})

export class StudentDashboardComponent implements OnInit {
  // sidenav = document.getElementById("mySidenav");

  studentImage = '/assets/images/logo-removebg-preview.png';
  studentName = 'Juan Perez Lopez';
  logoUrl = '/assets/images/logo-removebg-preview.png';

 

  ngOnInit(): void {
  //  const sidenav = document.getElementById("mySidenav");
  //   if (sidenav) {
  //     sidenav.style.width = "250px";
  //   }
  }

  // openNav() {
  //   // const sidenav = document.getElementById("mySidenav");
  //   if (sidenav) {
  //     sidenav.style.width = "250px";
  //   }
  // }

  // closeNav() {
  //   const sidenav = document.getElementById("mySidenav");
  //   if (sidenav) {
  //     sidenav.style.width = "0";
  //   }
  // }
}
