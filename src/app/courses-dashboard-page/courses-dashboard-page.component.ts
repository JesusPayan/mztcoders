import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseInfo } from '../utils/CourseInfo';
import { Resource } from '../utils/ResourceObject.interface';
import { ResourceService } from '../services/resource.service';
import { response } from 'express';
import { MatDialog } from '@angular/material/dialog';
import { ShowResourseDetailComponent } from '../show-resourse-detail/show-resourse-detail.component';
import { AuthService } from '../model/auth.service';
// import { Resource } from '../utils/Resource';
@Component({
  selector: 'app-courses-dashboard-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courses-dashboard-page.component.html',
  styleUrl: './courses-dashboard-page.component.css'
})
export class CoursesDashboardPageComponent {
// Removed duplicate getFiltered() method
  //Declaracion de variables 
  newResouce:Resource = {id: 0,name:'',carrierPath:null,type: null,tecnologyStack: null,score: 0,description: '',available: null};
  currentResource:Resource = {id: 0,name:'',carrierPath:null,type: null,tecnologyStack: null,score: 0,description: '',available: null};
  filterResource:Resource = {id: 0,name:'',carrierPath:null,type: null,tecnologyStack: null,score:0,description: '',available: null};
  currentRole:any;
  currentStudent:any;
  resourcesLength: number = 0;
  constructor(private resourceService:ResourceService, public dialog: MatDialog , private authService:AuthService){}
  data: any;
  respuesta: any;
  searchTerm: string = '';
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
    inputGroup:CourseInfo[] =[
      {title:'Carrer Path', description:'1', imagePath:''}, 
      {title:'Tipo', description:'2', imagePath:''},
      {title:'Stack', description:'3', imagePath:''},
      {title:'Disponibilidad', description:'4', imagePath:''},
      
    ] 

     puntuation= [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
     currentResources: Resource[] = []; 
       
     resourceinfo = {
    indiceEditar: null,
    carrierPath: [{ title: 'Backend' }, { title: 'Frontend' }],
    disponibilidad: [{ title: 'Disponible' }, { title: 'No Disponible' }]
  };
 

    resources:Resource[] =[] ;
editModal(index: number) {

    this.currentResource = { ...this.currentResources[index] };
    
   const dialogRef = this.dialog.open(ShowResourseDetailComponent, {
      data: {
        resourceinfo: this.resourceinfo,
        mainInfo: this.mainInfo,
        stacks: this.stacks,
        puntuation: this.puntuation,
        currentResource: this.currentResource
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Recurso guardado:', result);
      }
    });
}
    addResource(){
     if (this.indiceEditar === null) {
      // Modo crear
      // alert( this.newResouce.name + this.newResouce.carrierPath + this.newResouce.type);
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
        score: 0,
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

  delete(resource:Resource){ 
  alert(`¿Estás seguro de eliminar el recurso: ${resource.name}?`);
  this.resourceService.deleteResource(resource).subscribe({
    next: (data) => {
      this.respuesta = data;
      switch (this.respuesta.message) {
        case 'Recurso Eliminado con Exito':
          this.currentResources = this.respuesta.data;
          this.getcurrentResources();
          break;

        case 'Estudiante ya registrado':
          alert(this.respuesta.message);
          break;

        default:
          if (['503', '500', '504', '502'].includes(this.respuesta.statusCode)) {
            alert(this.respuesta.message);
          } else {
            alert(`Mensaje recibido: ${this.respuesta.message}`);
          }
          break;
      }

      confirm(this.respuesta.message);
    },
    error: (error) => {
      console.error('Ocurrió un error al eliminar el recurso:', error);
      alert('Error al intentar eliminar el recurso.');
    }
  });

  }
     
  cancelarEdicion() {
    this.indiceEditar = null;
    this.newResouce = {
    id: 0,
    name: '',
    carrierPath: null,
    type: null,
    tecnologyStack: null,
    score: 0,
    description: '',
    available: null
  };
}
    
  
  getFiltered(filterResource:Resource){ 
    console.log(filterResource);
    this.resourceService.getFilteredResources(filterResource).subscribe({
      
    });
    
  }

  

   getcurrentResources() {
   
    this.resourceService.getResources().subscribe({
      next: (data) => {
        this.respuesta = data; // Asigna la respuesta a la propiedad
        
        if (this.respuesta.message == 'Recursos Encontrados') {     
            this.currentResources = this.respuesta.data; 
            this.resourcesLength = this.respuesta.data.length;
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
  }
    ngOnInit(): void {
    this.authService.userRole$.subscribe(role => {
      this.currentRole = role;
    })
    this.authService.userName.subscribe(name => {
      this.currentStudent = name;
    })
    
    this.getcurrentResources();
  
}

  registrer() {

  
  if (!this.resources || this.resources.length === 0) {
    alert('No hay recursos para guardar');
    return;
  }

  const cleanResources = this.resources.map(res => ({
    name: res.name?.trim(),
    carrierPath: res.carrierPath,
    type: res.type,
    tecnologyStack: res.tecnologyStack,
    score: res.score,
    description: res.description?.trim(),
    available: res.available
  }));

  this.resourceService.addResource(cleanResources).subscribe({
    next: (data) => {
      this.respuesta = data;
      alert(this.respuesta.message);
      this.resources = [];
      this.getcurrentResources();
    },
    error: (error) => {
      console.error(error);
    }
  });

  }
  
  }
