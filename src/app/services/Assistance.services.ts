import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssistanceService {

    private apiUrl = 'http://localhost:8080/api/auth/assistance';
    
    constructor(private http: HttpClient) { }
    registerAssistance(studentId:number): Observable<any> {

        const url = `${this.apiUrl}/register/${studentId}`;
        console.log("POST ->", url);
        return this.http.post(url, {}); // body vacío si no se requiere enviar nada
          
    }
    getCurrenStudentAssistance(studentId:number): Observable<any> {
        //  return this.http.post<Assistance>(`${this.apiUrl}/register/${studentId}`);
        const url = `${this.apiUrl}/${studentId}`;
        console.log("GET ->", url);
        return this.http.get(url); // body vacío si no se requiere enviar nada
          
    }        
}