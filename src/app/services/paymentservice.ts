import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../services/Student';
import { Payment } from './Payment';
import { PaymentObjetc } from '../model/Payment.interface';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    private apiUrl = 'http://localhost:8080/api/auth/payments';
    
    constructor(private http: HttpClient) { }
    
    // getPayments(): Observable<any[]> {
    //     // return this.http.get<any[]>(this.apiUrl+"/all{}", { responseType: 'json' });
    //     return this.http.get<Payment[]>(`${this.apiUrl}/estudiante/${Student.id}`);
    // }
    
    registerPayment(data: any): Observable<any> {
        // alert("Adding payment: " + data);
        // console.log("Adding payment: ", data);
        return this.http.post(this.apiUrl+"/register", data);
    }
    
    getPaymentsByStudentId(studentId: number): Observable<PaymentObjetc[]> {
        // alert(this.apiUrl + "/{" + studentId+"}");
        // (`${this.apiUrl}/student/{studentId}`);
        console.log(`this.apiUrl + "/{" + studentId+"}"`);
        return this.http.get<PaymentObjetc[]>(`${this.apiUrl}/student/${studentId}`);
    }
    getAllPayments(): Observable<PaymentObjetc[]> {
        return this.http.get<PaymentObjetc[]>(`${this.apiUrl}/all`);
    }
}