import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../utils/ResourceObject.interface';
// Define Resource interface if not already defined or import it


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:8080/api/auth/resources'
  
  updateResource( data: Resource): Observable<any> {
    // return this.http.put(`${this.apiUrl}/${id}`, data);
     return this.http.put(this.apiUrl + '/update', data);
  }
  deleteResource( data: Resource): Observable<any> {
    // return this.http.put(`${this.apiUrl}/${id}`, data);
    //  return this.http.delete<Resource>(this.apiUrl + '/delete', { body: data });
      //return this.http.delete<Resource>(this.apiUrl + '/delete', { body: data });
      return this.http.delete(this.apiUrl + '/delete',{ body: data });
  }
    
    constructor(private http: HttpClient) { }
    getResources(): Observable<Resource[]> {
      return this.http.get<Resource[]>(this.apiUrl + '/all');
    }
    addResource(data: Resource[]): Observable<any[]> {
      // return this.http.post<Resource>(this.apiUrl+'/register', student);
      return this.http.post<any[]>(this.apiUrl+'/register', data);
    }
  getFilteredResources(data: Resource): Observable<Resource[]> {
      return this.http.get<Resource[]>(this.apiUrl + '/{{data}}');
    }
}