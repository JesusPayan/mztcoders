import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contacus',
  standalone: true,
  imports: [],
  templateUrl: './contacus.component.html',
  styleUrl: './contacus.component.css'
})
export class ContacusComponent {
   appComponent = new AppComponent();
}
