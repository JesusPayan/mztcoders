import { Component,ChangeDetectionStrategy, signal,inject } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button'
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [MatExpansionModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
  
})
export class CoursesPageComponent {
  gitHubImageUrl = 'assets/images/github.png';
  javaImageUrl = 'assets/images/java.png';
  sqlImageUrl = 'assets/images/sql.png';
  apiImageUrl = 'assets/images/api.png';
  pooImageUrl = 'assets/images/poo.png';
  beginnersImageUrl = 'assets/images/beginners.png';
  midDeveloperImageUrl = 'assets/images/mid-developer.png';
  advancedImageUrl = 'assets/images/advanced.png';
  springImageUrl  = 'assets/images/spring.png';
  junitImageUrl = 'assets/images/junit.png';
  hibernateImageUrl = 'assets/images/hibernate.png';
  basicFrontendImageUrl = 'assets/images/frontbasic.png';
  advancedFrontendImageUrl = 'assets/images/angular.png';
  devopsImageUrl = 'assets/images/devops.png';

  troncoComunImageUrl = 'assets/images/tronco-comun.jpg';
  htmlImageUrl = 'assets/images/html.png';
  cssImageUrl = 'assets/images/css.png';
  boostrapImageUrl = 'assets/images/boostrap.jpg';
  angularImageUrl = 'assets/images/angular.png';

  readonly panelOpenState = signal(false);
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
