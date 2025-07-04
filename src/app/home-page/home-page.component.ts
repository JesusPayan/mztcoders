import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from '../app.component';
import { ImagePath } from '../utils/ImagesPath';
import { CourseInfo } from '../utils/CourseInfo';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet,   RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  titleToShow = 'En nuestra escuela de programación, transformamos tu potencial en habilidades reales.';

  textToShow = 'Te ofrecemos una formación práctica, guiada por profesionales activos en la industria, con acceso a recursos modernos, buenas prácticas y una comunidad que te acompaña en cada paso.'+
'Ya sea que empieces desde cero o quieras llevar tu carrera al siguiente nivel, aquí encontrarás el impulso que necesitas.' ;
imagesToShow: ImagePath[] = [
         
        { component: 'logo',path: 'assets/images/logo-removebg-preview.png' },
        { component: 'javaBgImg',path: 'assets/images/java-developer-home-page.jpeg'},
        { component: 'practicesImg', path: 'assets/images/clean-practice.jpg' },
        { component: 'developTeamsImg', path: 'assets/images/development-team.jpg' },
        { component: 'bestPracticesImg', path: 'assets/images/best-practices.png' },
        { component: 'bolsaDeTrabajoImg', path: 'assets/images/bolsa-trabajo.jpg' }
       ];
contentToShow:CourseInfo[] = [
        { title: 'Formacion practica', description: 'Aprende haciendo. Nuestros cursos están diseñados para que apliques lo que aprendes desde el primer día.', imagePath: 'assets/images/development-team.jpg' },
        { title: 'Aprende con los Mejores', description: 'Aprende de expertos en activo que comparten contigo las mejores prácticas de la industria.', imagePath: 'assets/images/clean-practice.jpg' },
        { title: 'Mejores practicas', description: 'Conoce y aplica las mejores practicas de la industria.', imagePath: 'assets/images/best-practices.png' },
        { title: 'Bolsa de Trabajo', description: 'Conecta con empresas que buscan talento como el tuyo. Nosotros te acercamos a tu primer (o mejor) empleo.', imagePath: 'assets/images/bolsa-trabajo.jpg' }
       ];

       whyChooseUs:CourseInfo[] = [
        { title: 'Experiencia', description: 'Mas de 4 años laborando en una de las principales empresas de desarrollo de software en México.', imagePath: 'fas fa-bolt text-2xl' },
        { title: 'Conocimiento de la industria', description: 'Conocemos las necesidades del mercado de software.', imagePath: 'fas fa-tags text-2xl'},
        { title: 'Proyectos reales', description: 'Crea proyectos reales con tecnologías modernas.', imagePath: 'fas fa-headset text-2xl' },
        { title: 'Preparacion para entrevistas', description: 'Te enseñamos las bases y te daremos tips y herramientas para prepararte para las entrevistas de trabajo.', imagePath: 'fas fa-shield-alt text-2xl' }
       ];
       imageSize = "w-100";
       displayinf(){
         
       }
}

// theBestTeamsShort = 'Aprende de expertos en activo que comparten contigo las mejores prácticas de la industria.';
// theBestTeamsLong = 'Nuestros mentores no solo enseñan, trabajan activamente en la industria del software.'+
// 'Aprenderás con quienes enfrentan y resuelven los retos reales del desarrollo día a día, siguiendo buenas prácticas, patrones modernos y estándares profesionales.'+
// '🧑‍🏫 Dominamos lo que enseñamos, y te lo transmitimos con claridad, paciencia y experiencia.'+
// 'Prepárate para escribir código limpio, escalable y profesional desde el inicio.'
  // ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      
      

  // }
  // imgSize = "w-70 w-10"
  
  //Inician las funciones
//   displayInfo(  id: number) {
//     alert (id);
//   switch  (id) {
//     case 1:
//      const textToShow =  "Olvídate de la teoría interminable: en nuestra escuela aprenderás programando. Cada módulo incluye proyectos reales, desafíos prácticos y"+
//       " simulaciones del mundo laboral para que salgas listo para trabajar." +
//       +" Desde el primer día escribirás código útil, guiado por mentores que te impulsarán a crecer con cada reto.'+'¡Tu portafolio hablará por ti antes que tu CV!';"
   
//       this.titleToShow = 'Formación Practica';
//       this.imgSize   = "w-100 h-100";
//     break ;
//     case 2:  
//       this.textToShow =  'Nuestros mentores no solo enseñan, trabajan activamente en la industria del software.\n' + 
// '\nAprenderás con quienes enfrentan y resuelven los retos reales del desarrollo día a día, siguiendo buenas prácticas, patrones modernos y estándares profesionales.\n' +
// '  Dominamos lo que enseñamos, y te lo transmitimos con claridad, paciencia y experiencia.' +
// 'Prepárate para escribir código limpio, escalable y profesional desde el inicio.'

//       this.titleToShow = 'Aprende de los mejores'
//     break ;
//     case 3:  
//       this.textToShow = 
//       this.imagetoShow = this.bolsaDeTrabajoImg
//       this.titleToShow = this.theBestTeamsShort;
//     break ;
//     case 4:
//       this.textToShow =  'Nuestro objetivo es claro: que consigas trabajo y avances en tu carrera lo antes posible. \n ¡Estudia hoy, trabaja mañana!';
//       this.imagetoShow = this.bolsaDeTrabajoImg;
//       this.titleToShow = 'Bolsa de Trabajo';
//     break ;
//     default:
//       this.textToShow =  'Te ofrecemos una formación práctica, guiada por profesionales activos en la industria, con acceso a recursos modernos, buenas prácticas y una comunidad que te acompaña en cada paso.'+
//       'Ya sea que empieces desde cero o quieras llevar tu carrera al siguiente nivel, aquí encontrarás el impulso que necesitas.' +
//       +'💼 Además, te conectamos con oportunidades laborales reales a través de nuestra bolsa de trabajo.' + '🚀 Aprende. Crea. Trabaja. Conviértete en programador.';
//       this.imagetoShow = this.imagesToShow[0].path;
//       this.titleToShow = 'En nuestra escuela de programación, transformamos tu potencial en habilidades reales.';
//       this.imgSize   = "w-100";
//     break;
//   }
    



// 📝 Descripción larga:

// No solo te formamos, también te conectamos con tu próxima oportunidad laboral.
// Gracias a nuestras alianzas con empresas tecnológicas, podrás acceder a vacantes exclusivas, mentorías de empleabilidad, revisión de CV, simulacros de entrevista y más.
// 💡 Nuestro objetivo es claro: que consigas trabajo y avances en tu carrera lo antes posible.
// ¡Estudia hoy, trabaja mañana!