import { Component,ChangeDetectionStrategy, signal,inject } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button'
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseInfo } from '../utils/CourseInfo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [MatExpansionModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
  
})
export class CoursesPageComponent {
  mainInfo: CourseInfo[] = [
   {title:'Ruta de apredizaje', description:'Para nosotros lo mas importante es que nuestros aprendan lo mas relevante en los ambitos del desarrollo de software, por eso hemos creado una ruta de aprendizaje que te ayudara a convertirte en un desarrollador profesional, esta ruta esta dividida en 3 niveles, cada nivel tiene un enfoque diferente y te ayudara a adquirir las habilidades necesarias para enfrentar los retos del mundo laboral.', imagePath:'assets/images/logo-removebg-preview.png'}, 
  ]
  contentInfo: CourseInfo[] = [
    
    {title:'Tronco Común', description:'El tronco común es la base de nuestro curso, en este curso aprenderás los fundamentos de la programación, bases de datos, desarrollo web y mucho más. Este curso es ideal para aquellos que quieren empezar desde cero o para aquellos que quieren reforzar sus conocimientos.', imagePath:''},
    {title:'Desarrollador Backend', description:'Como desarrollador Backend, aprenderás a construir y mantener la lógica del lado del servidor, así como a gestionar las bases de datos y la comunicación entre el servidor y el cliente.', imagePath:''},
    {title:'Desarrollador Frontend', description:'Como desarrollador Frontend, aprenderás a construir la interfaz de usuario de las aplicaciones web, utilizando tecnologías como HTML, CSS y JavaScript.', imagePath:''},
    {title:'Desarrollador Fullstack', description:'Como desarrollador Fullstack, aprenderás a construir aplicaciones web completas, desde el lado del servidor hasta el lado del cliente, utilizando tecnologías como Java, Springboot, Angular y mucho más.', imagePath:''},
  ];
  troncoComun: CourseInfo[] = [
    {title:'GitHub y Git', description:'Aprende a utilizar Git y GitHub para el control de versiones y la colaboración en proyectos de software.', imagePath:'assets/images/github.png'},
     {title:'Java', description:'Aprende los fundamentos de Java, uno de los lenguajes de programación más populares y demandados en la industria.', imagePath:'assets/images/java.png'},
     {title:'POO', description:'Domina la Programación Orientada a Objetos (POO) para diseñar software robusto y escalable.', imagePath:'assets/images/poo.png'},
  ];
  backend: CourseInfo[] = [
    {title:'Java Avanzado', description:'Aprende a utilizar Git y GitHub para el control de versiones y la colaboración en proyectos de software.', imagePath:'assets/images/java.png'},
     {title:'Springboot', description:'Aprende los fundamentos de Springboot, un framework de desarrollo de aplicaciones basado en Java.', imagePath:'assets/images/spring.png'},
     {title:'Bases de Datos', description:'Domina la Programación Orientada a Objetos (POO) para diseñar software robusto y escalable.', imagePath:'assets/images/sql.png'},
     {title:'JUNIT', description:'Domina la Programación Orientada a Objetos (POO) para diseñar software robusto y escalable.', imagePath:'assets/images/junit.png'},
  ];
  frontend: CourseInfo[] = [
    {title:'HTML', description:'Aprende los fundamentos de HTML, el lenguaje de marcado para la creación de páginas web.', imagePath:'assets/images/html.png'},
     {title:'CSS', description:'Aprende a utilizar CSS para dar estilo y diseño a tus páginas web.', imagePath:'assets/images/css.png'},
     {title:'Boostrap', description:'Domina Boostrap, el framework CSS que facilita el diseño de páginas web responsivas.', imagePath:'assets/images/boostrap.jpg'},
     {title:'Angular', description:'Aprende a utilizar Angular, un framework de desarrollo para construir aplicaciones web modernas.', imagePath:'assets/images/angular.png'},
  ];
   fullStack: CourseInfo[] = [
     {title:'Springboot', description:'Aprende los fundamentos de Springboot, un framework de desarrollo de aplicaciones basado en Java.', imagePath:'assets/images/spring.png'},
     {title:'API', description:'Aprende a utilizar APIs para la comunicación entre diferentes servicios y aplicaciones.', imagePath:'assets/images/api.png'},
     {title:'Junit', description:'Domina JUNIT, el marco de pruebas para Java que permite crear pruebas automatizadas de manera sencilla.', imagePath:'assets/images/junit.png'},
     {title:'Angular', description:'Aprende a utilizar Angular, un framework de desarrollo para construir aplicaciones web modernas.', imagePath:'assets/images/angular.png'},
  ];


}
