import { Component } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  template: `
    <button (click)="showToast(message, status,type)" mat-button matStepperNext style="background-color: blue;">Show Toast</button>
  `,
  standalone: true,
styleUrls: ['./Toast.component.css']
})
export class ToastComponent {
  message: string = '';
  status: string = '';
  type: string = '';
  constructor(private snackBar: MatSnackBar) {}

  showToast(message: string, status: string,type: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    // config.politeness = 'polite';
    if(type == 'error'){
      config.panelClass = ['custom-toast-error'];
    }else if(type == 'warning'){
      config.panelClass = ['custom-toast-info'];
    }else{
      config.panelClass = ['custom-toast-sucess'];
    }
    // config.panelClass = ['custom-toast'];
    this.snackBar.open(message, status, config);
  }
}