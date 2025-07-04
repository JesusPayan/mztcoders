import { Component  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ConfirmPasswordComponent } from '../confirm-password/confirm-password.component';
import { Assistance } from '../model/Assistance.interface';
import { AssistanceService } from '../services/Assistance.services';
import { Injectable, Inject } from '@angular/core';
import { AuthService } from '../model/auth.service';
@Component({
  selector: 'app-assistance-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assistance-page.component.html',
  styleUrl: './assistance-page.component.css'
})

export class AssistancePageComponent {
  userName: string = 'User';
  totalAssistance: number = 0;
  totalAbsence: number = 0;
  assistanceList:Assistance[]=[]
  respuesta: any
  constructor (
    private authService: AuthService,
    private dialog: MatDialog,
    @Inject(AssistanceService) private assistanceService: AssistanceService
    
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userName = localStorage.getItem('name') || '';
    this.getStudentAssistance(Number(localStorage.getItem('id')));
    
  }

  openDialog() {
    const dialog = this.dialog.open(ConfirmPasswordComponent);
    this.getStudentAssistance(Number(localStorage.getItem('id')));  
  }
  getStudentAssistance(studentID: number) {
   this.assistanceService.getCurrenStudentAssistance(Number(localStorage.getItem('id'))).subscribe({
          next: (data: any) => {
              console.log(data);
              this.respuesta = data;
              this.assistanceList = this.respuesta.data;
              this.totalAssistance =this.assistanceList.length;
              console.log(this.totalAssistance);
              
            },
            error: (error: any) =>{
              console.error(error);
            }
          });
  }
}
