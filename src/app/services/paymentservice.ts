import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../services/Student';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    private apiUrl = 'http://localhost:8080/api/auth/payments';
    
    constructor(private http: HttpClient) { }
    
    getPayments(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
    
    addPayment(data: any): Observable<any> {
        alert("Adding payment: " + data);
        console.log("Adding payment: ", data);
        return this.http.post(this.apiUrl+"/register", data);
    }
    
    getPaymentsByStudentId(studentId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/student/${studentId}`);
    }
}