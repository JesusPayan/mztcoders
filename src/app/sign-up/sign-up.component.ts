import { Component,viewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { on } from 'events';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
   appComponent = new AppComponent();
   @ViewChild('signUpForm') signUpForm!: NgForm;
  onSubmit() {}
   registrer() {
    const formData = this.signUpForm.value;
    console.log('Form submitted:', formData);
    alert  ('Form submitted successfully!');
    if (this.signUpForm.valid) {
      
      
      // Handle form data (e.g., send it to a backend API)
    } else {
      console.log('Form is invalid');
    }
  }
}

