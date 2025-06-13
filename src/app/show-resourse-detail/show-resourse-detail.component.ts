import { Component, inject, Inject } from '@angular/core';

import { AuthService } from '../model/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,FormControl, FormsModule,NgForm,NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CoursesDashboardPageComponent } from '../courses-dashboard-page/courses-dashboard-page.component';

import { NgModule } from '@angular/core';


import { CourseInfo } from '../utils/CourseInfo';
import { Resource } from '../utils/ResourceObject.interface';
import { ResourceService } from '../services/resource.service';
import { response } from 'express';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-show-resourse-detail',
  standalone: true,
  imports: [CommonModule,
       FormsModule],
  templateUrl: './show-resourse-detail.component.html',
  styleUrl: './show-resourse-detail.component.css'
})

export class ShowResourseDetailComponent {
  
   isAdmin: boolean = false;
   isEstudiante: boolean = false;
  //constructor(private authService: AuthService, private dialog: MatDialog ,public resourceinfo:CoursesDashboardPageComponent) { }
  respuesta: any;
  resourceinfo: any;
  mainInfo: any;
  stacks: any;
  puntuation: any;
  currentResource: Resource = {
    name: '',
    carrierPath: null,
    type: null,
    tecnologyStack: null,
    points: null,
    description: '',
    available: null
  };
  constructor(
    
    private dialogRef: MatDialogRef<ShowResourseDetailComponent>,
    authService:AuthService,
    private resourceService:ResourceService,
    
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   // Recibimos datos del padre
    this.resourceinfo = data.resourceinfo;
    this.mainInfo = data.mainInfo;
    this.stacks = data.stacks;
    this.puntuation = data.puntuation;
    this.currentResource = { ...data.currentResource };
    console.log('Recursos recibidos:', this.resourceinfo, this.mainInfo, this.stacks, this.puntuation, this.currentResource);
  }

  update() {
    alert('Recurso Actualizado');
     this.resourceService.updateResource(this.currentResource).subscribe({
      next: (data) => {
        this.respuesta = data; // Asigna la respuesta a la propiedad
        // console.log('Respuesta recibida:', this.respuesta);
        if (this.respuesta.message == 'Recurso Actualizado') {
            
            alert(this.respuesta.message);
            
        }
        if(this.respuesta.message == 'Estudiante ya registrado'){
          alert(this.respuesta.message);
        }
        if(['503', '500','504','502'].includes(this.respuesta.statusCode)){
          alert(this.respuesta.message);
        }
        confirm(this.respuesta.message);
      },
      error: (error) => {
        
        console.error(error);
      }
    });
    this.dialogRef.close(this.currentResource);
  }
  
  close() {
    this.dialogRef.close();
  }



  
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
    inputGroup:CourseInfo[] =[
      {title:'Carrer Path', description:'1', imagePath:''}, 
      {title:'Tipo', description:'2', imagePath:''},
      {title:'Stack', description:'3', imagePath:''},
      {title:'Disponibilidad', description:'4', imagePath:''},
      
    ] 
// currentResource:Resource = {id: 0,name:'',carrierPath:null,type: null,tecnologyStack: null,points: null,description: '',available: null};

//  resourceinfo: any;
//   mainInfo: any;
//   stacks: any;
//   puntuation: any;
//   currentResource: any = {}


}