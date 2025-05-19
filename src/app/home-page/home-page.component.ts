import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet,   RouterLink, MatCardModule, MatButtonModule,AppComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  acp = new AppComponent();
  baseImageUrl = 'assets/images/';
  javaBgImg = this.baseImageUrl + 'java-developer-home-page.jpeg';
  practicesImg = this.baseImageUrl + 'clean-practice.jpg';
  developTeamsImg = this.baseImageUrl + 'development-team.jpg';
  bestPracticesImg = this.baseImageUrl + 'best-practices.png';
  bolsaDeTrabajoImg = this.baseImageUrl + 'bolsa-trabajo.jpg';
  
  titleToShow = 'En nuestra escuela de programación, transformamos tu potencial en habilidades reales.';
  imagetoShow = this.acp.logoUrl;
  textToShow = 'Te ofrecemos una formación práctica, guiada por profesionales activos en la industria, con acceso a recursos modernos, buenas prácticas y una comunidad que te acompaña en cada paso.'+
'Ya sea que empieces desde cero o quieras llevar tu carrera al siguiente nivel, aquí encontrarás el impulso que necesitas.' ;


theBestTeamsShort = 'Aprende de expertos en activo que comparten contigo las mejores prácticas de la industria.';
theBestTeamsLong = 'Nuestros mentores no solo enseñan, trabajan activamente en la industria del software.'+
'Aprenderás con quienes enfrentan y resuelven los retos reales del desarrollo día a día, siguiendo buenas prácticas, patrones modernos y estándares profesionales.'+
'🧑‍🏫 Dominamos lo que enseñamos, y te lo transmitimos con claridad, paciencia y experiencia.'+
'Prepárate para escribir código limpio, escalable y profesional desde el inicio.'
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      
      

  }
  imgSize = "w-70 w-10"
  
  //Inician las funciones
  displayInfo(  id: number) {
    alert (id);
  switch  (id) {
    case 1:
     const textToShow =  "Olvídate de la teoría interminable: en nuestra escuela aprenderás programando. Cada módulo incluye proyectos reales, desafíos prácticos y"+
      " simulaciones del mundo laboral para que salgas listo para trabajar." +
      +" Desde el primer día escribirás código útil, guiado por mentores que te impulsarán a crecer con cada reto.'+'¡Tu portafolio hablará por ti antes que tu CV!';"
      this.imagetoShow = this.practicesImg
      this.titleToShow = 'Formación Practica';
      this.imgSize   = "w-100 h-100";
    break ;
    case 2:  
      this.textToShow =  'Nuestros mentores no solo enseñan, trabajan activamente en la industria del software.\n' + 
'\nAprenderás con quienes enfrentan y resuelven los retos reales del desarrollo día a día, siguiendo buenas prácticas, patrones modernos y estándares profesionales.\n' +
'  Dominamos lo que enseñamos, y te lo transmitimos con claridad, paciencia y experiencia.' +
'Prepárate para escribir código limpio, escalable y profesional desde el inicio.'
      this.imagetoShow = this.developTeamsImg
      this.titleToShow = 'Aprende de los mejores'
    break ;
    case 3:  
      this.textToShow = 
      this.imagetoShow = this.bolsaDeTrabajoImg
      this.titleToShow = this.theBestTeamsShort;
    break ;
    case 4:
      this.textToShow =  'Nuestro objetivo es claro: que consigas trabajo y avances en tu carrera lo antes posible. \n ¡Estudia hoy, trabaja mañana!';
      this.imagetoShow = this.bolsaDeTrabajoImg;
      this.titleToShow = 'Bolsa de Trabajo';
    break ;
    default:
      this.textToShow =  'Te ofrecemos una formación práctica, guiada por profesionales activos en la industria, con acceso a recursos modernos, buenas prácticas y una comunidad que te acompaña en cada paso.'+
      'Ya sea que empieces desde cero o quieras llevar tu carrera al siguiente nivel, aquí encontrarás el impulso que necesitas.' +
      +'💼 Además, te conectamos con oportunidades laborales reales a través de nuestra bolsa de trabajo.' + '🚀 Aprende. Crea. Trabaja. Conviértete en programador.';
      this.imagetoShow = this.bolsaDeTrabajoImg;
      this.titleToShow = 'En nuestra escuela de programación, transformamos tu potencial en habilidades reales.';
      this.imgSize   = "w-100";
    break;
  }
    
}
}




// 📝 Descripción larga:

// No solo te formamos, también te conectamos con tu próxima oportunidad laboral.
// Gracias a nuestras alianzas con empresas tecnológicas, podrás acceder a vacantes exclusivas, mentorías de empleabilidad, revisión de CV, simulacros de entrevista y más.
// 💡 Nuestro objetivo es claro: que consigas trabajo y avances en tu carrera lo antes posible.
// ¡Estudia hoy, trabaja mañana!