import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css'
})
export class CoursesPageComponent {
  gitHubImageUrl = 'assets/images/github.png';
  javaImageUrl = 'assets/images/java.png';
  sqlImageUrl = 'assets/images/sql.png';
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
}
