import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseInfo } from '../utils/CourseInfo';
import { Resource } from '../utils/ResourceObject.interface';
// import { Resource } from '../utils/Resource';
@Component({
  selector: 'app-courses-dashboard-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courses-dashboard-page.component.html',
  styleUrl: './courses-dashboard-page.component.css'
})
export class CoursesDashboardPageComponent {
  newResouce:Resource = {
    id: 0,
    name: '',
    carrierPath:null,
    type: null,
    tecnologyStack: null,
    points: null,
    description: '',
    available: null
  }
// Índice del elemento que se está editando
  indiceEditar: number | null = null;
  mainInfo: CourseInfo[] = [
       {title:'Curso', description:'', imagePath:''}, 
       {title:'Actividad', description:'', imagePath:''}, 
       {title:'Leccion', description:'', imagePath:''},
      ]
  stacks: CourseInfo[] = [
    {title:'Java', description:'', imagePath:''},
    {title:'Git', description:'', imagePath:''},
    {title:'Github ', description:'', imagePath:''},
    {title:'POO', description:'', imagePath:''},
    {title:'Spring', description:'', imagePath:''},
    {title:'Spring Boot', description:'', imagePath:''},
    {title:'HTML', description:'', imagePath:''},
    {title:'CSS', description:'', imagePath:''},
    {title:'Boostrap', description:'', imagePath:''},
    {title:'JUNIT', description:'', imagePath:''},
    {title:'Angular', description:'', imagePath:''},
    {title:'Mockito', description:'', imagePath:''}
  ]
    carrierPath: CourseInfo[] = [
      {title:'Tronco Común', description:'', imagePath:''}, 
      {title:'Desarrollador Backend', description:'', imagePath:''}, 
      {title:'Desarrollador Frontend', description:'', imagePath:''}, 
      {title:'Desarrollador Fullstack', description:'', imagePath:''}, 
    ]
    disponibilidad: CourseInfo[] = [
      {title:'Disponible', description:'', imagePath:''}, 
      {title:'No Disponible', description:'', imagePath:''}, 
      {title:'En Desarrollo', description:'', imagePath:''}, 
      
    ]
     puntuation= [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
     
       
     

    resources:Resource[] =[] ;

    addResource(){
     if (this.indiceEditar === null) {
      // Modo crear
      alert( this.newResouce.name + this.newResouce.carrierPath + this.newResouce.type);
      this.resources.push({ ...this.newResouce });
    } else {
      // Modo editar
      this.resources[this.indiceEditar] = { ...this.newResouce };
      this.indiceEditar = null;
    }

    this.newResouce = {
        id: 0,
        name: '',
        carrierPath: null,
        type: null,
        tecnologyStack: null,
        points: null,
        description: '',
        available: null
      }
  }
editResource(index: number) {
    this.indiceEditar = index;
    this.newResouce = { ...this.resources[index] };
  }
  deleteResource(index: number) {
    this.resources.splice(index, 1);
  }
     
  cancelarEdicion() {
    
  }
      // this.resources.push(this.newResouce);
      
      // this.newResouce = {
      //   id: 0,
      //   name: '',
      //   carrierPath: '',
      //   type: '',
      //   description: ''
      // }
 
      

  registrer() {

  }
}
