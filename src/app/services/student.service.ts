import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../services/Student';
@Injectable({
  providedIn: 'root'
})





export class StudentService {

  
  private apiUrl = 'http://localhost:8080/api/auth/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(data: any): Observable<any> {
    // return this.http.post<Student>(this.apiUrl+'/register', student);
    return this.http.post(this.apiUrl+'/register', data);
  }
}
export { Student };



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MyService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//   constructor(private http: HttpClient) {}

//   // GET con parámetros dinámicos
//   getPostById(id: number): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${id}`);
//   }

//   // POST: enviar nuevo recurso
//   createPost(data: any): Observable<any> {
//     return this.http.post(this.apiUrl, data);
//   }

//   // PUT: actualizar recurso
//   updatePost(id: number, data: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${id}`, data);
//   }

//   // GET con query params
//   getWithParams(userId: number): Observable<any> {
//     const params = new HttpParams().set('userId', userId.toString());
//     return this.http.get(this.apiUrl, { params });
//   }
// }

