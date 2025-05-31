import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ImagePath } from '../utils/ImagesPath';
import { CourseInfo } from '../utils/CourseInfo';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-whoweare',
  standalone: true,

imports: [CommonModule, MatDividerModule, MatListModule, NgOptimizedImage],
  templateUrl: './whoweare.component.html',
  styleUrl: './whoweare.component.css'
})
export class WhoweareComponent {
logoUrl = '/assets/images/logo-removebg-preview.png';
selfimgUrl = '/assets/images/who-we-are-self.jpg';
misionimgUrl = '/assets/images/mision.png';
visionimgUrl = '/assets/images/vision.png';
valoresimgUrl = '/assets/images/valores2.jpg';
  // Nos dedicamos a crear soluciones digitales que transforman ideas en realidades. Nuestro objetivo es brindar un servicio de 

//"Existimos para acompañarte en ese cambio de vida que estás buscando."

//Como muchos de los estudiantes de informatica cuando egrese de mi carrera me pregunte tendre las herramientas necesarias para enfrentarme a la realidad laboral, la respuesta es no...
//muchas veces es necesario adentrarnos un poco mas en el aprendizaje de la programacion para lograr el desarrollo profesional y personal que necesitamos, eso es lo que nos llevo a crear Smart Coders Academy, una academia de programacion con el fin de ayudar a los estudiantes a conseguir sus objetivos profesionales.
imagesToShow: ImagePath[] = [
        
          { component: 'logo',path: 'assets/images/logo-removebg-preview.png' },
          { component: 'javaBgImg',path: 'assets/images/java-developer-home-page.jpeg'},
          { component: 'practicesImg', path: 'assets/images/clean-practice.jpg' },
          { component: 'developTeamsImg', path: 'assets/images/development-team.jpg' },
          { component: 'bestPracticesImg', path: 'assets/images/best-practices.png' },
          { component: 'bolsaDeTrabajoImg', path: 'assets/images/bolsa-trabajo.jpg' }
         ];
  contentToShow:CourseInfo[] = [
          { title: 'Jesús Payán', description: 'Soy egresado del la Facultad de Informatica Mazatlan de la Universidad Automanoma de Sinaloa, siempre he sido muy curioso y me gusta aprender cosas nuevas, lo que me ha llevado a incursionar en el mundo de la programacion.            Desde 2021 colaboro en una de las firmas mas importantes de consultoria tecnologica a nivel nacional e internacional, gracias a esto he podido aprender y desarrollar habilidades que me permiten ser un buen profesional en el campo de la programacion.', imagePath: 'assets/images/who-we-are-self.jpg' },
          { title: '¿Como nace la academia?', description: 'Como muchos de los estudiantes de informatica cuando egrese de mi carrera me pregunte tendre las herramientas necesarias para enfrentarme a la realidad laboral, la respuesta es no... muchas veces es necesario adentrarnos un poco mas en el aprendizaje de la programacion para lograr el desarrollo profesional y personal que necesitamos, eso es lo que nos llevo a crear Smart Coders Academy, una academia de programacion con el fin de ayudar a los estudiantes a conseguir sus objetivos profesionales.', imagePath: 'assets/images/logo-removebg-preview.png' },
          // { title: '¿Que hacemos?', description: 'Formamos desarrolladores de software desde cero hasta un nivel profesional, combinando teoría sólida con práctica y proyectos reales.', imagePath: 'assets/images/mision.png' },
          // { title: 'Mision', description: 'Empoderar a nuestros alumnos con los conocimientos, habilidades y mentalidad que les permitan destacar en el mundo tecnológico y transformar sus vidas a través del aprendizaje.', imagePath: 'assets/images/vision.png' },
          // { title: 'Vision', description: 'Ser la academia de programación de referencia en la formación de talento digital en la región.', imagePath: 'assets/images/valores.jpg' },
          // { title: 'Valores', description: 'Fomentar la ética, la colaboración y la innovación en el aprendizaje.', imagePath: 'assets/images/valores.jpg' }
         ];
         contentToShow2:CourseInfo[] = [
          // { title: 'Jesús Payán', description: 'Soy egresado del la Facultad de Informatica Mazatlan de la Universidad Automanoma de Sinaloa, siempre he sido muy curioso y me gusta aprender cosas nuevas, lo que me ha llevado a incursionar en el mundo de la programacion.            Desde 2021 colaboro en una de las firmas mas importantes de consultoria tecnologica a nivel nacional e internacional, gracias a esto he podido aprender y desarrollar habilidades que me permiten ser un buen profesional en el campo de la programacion.', imagePath: 'assets/images/who-we-are-self.jpg' },
          // { title: '¿Como nace la academia?', description: 'Como muchos de los estudiantes de informatica cuando egrese de mi carrera me pregunte tendre las herramientas necesarias para enfrentarme a la realidad laboral, la respuesta es no... muchas veces es necesario adentrarnos un poco mas en el aprendizaje de la programacion para lograr el desarrollo profesional y personal que necesitamos, eso es lo que nos llevo a crear Smart Coders Academy, una academia de programacion con el fin de ayudar a los estudiantes a conseguir sus objetivos profesionales.', imagePath: 'assets/images/logo-removebg-preview.png' },
          // { title: '¿Que hacemos?', description: 'Formamos desarrolladores de software desde cero hasta un nivel profesional, combinando teoría sólida con práctica y proyectos reales.', imagePath: 'assets/images/mision.png' },
          { title: 'Mision', description: 'Empoderar a nuestros alumnos con los conocimientos, habilidades y mentalidad que les permitan destacar en el mundo tecnológico y transformar sus vidas a través del aprendizaje.', imagePath: 'assets/images/vision.png' },
          { title: 'Vision', description: 'Ser la academia de programación de referencia en la formación de talento digital en la región.', imagePath: 'assets/images/vision.png' },
           { title: 'Valores', description: 'Fomentar la ética, la colaboración y la innovación en el aprendizaje.', imagePath: 'assets/images/valores.png' }
         ];
}
