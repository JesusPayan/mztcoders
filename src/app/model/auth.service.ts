



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ignoreElements, map, Observable, tap } from 'rxjs';
import { LoginCredentials } from './login-credentials.interface';
import { User, UserWithToken } from './user.interface'; 
import {LoginResponse} from '../utils/login-response.interface';

const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private user = new BehaviorSubject<UserWithToken | null>(null);
  private apiUrl = 'http://localhost:8080/api/auth/students';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();
  userName = new BehaviorSubject<string | null>(null);
  userEmail = new BehaviorSubject<string | null>(null);
  userID = new BehaviorSubject<string | null>(null);
  userPicture = new BehaviorSubject<string | null>(null);
  userPassword = new BehaviorSubject<string | null>(null);
  userPaymentStatus = new BehaviorSubject<string | null>(null);


  //user$ = this.user.asObservable();
  //isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor(private httpClient: HttpClient, private router: Router) {

  }


  login(email: string, password: string): Observable<LoginResponse> {
    if (!email || !password) {
      // Return an observable that errors if email or password is missing
      return new Observable<LoginResponse>((observer) => {
        observer.error(new Error('Email and password are required'));
      });
    } else {
      return this.httpClient.post<LoginResponse>(this.apiUrl + '/login', { email, password }).pipe(
        tap((response: LoginResponse) => {
          this.isAuthenticatedSubject.next(true);
          this.userRoleSubject.next(response.role);
          this.userName.next(response.data.name);
          this.userPicture.next(response.data.picture ?? null);
          this.userEmail.next(response.data.email);
          this.userID.next(String(response.data.id));
          this.userPassword.next(password);
          this.userPaymentStatus.next(response.data.paymentStatus ?? 'No payment status available');
          localStorage.setItem('token', response.token);
          localStorage.setItem('userRole', response.role);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('password', password);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('id', String(response.data.id));
          localStorage.setItem('picture', response.data.picture ?? '');
          localStorage.setItem('userData', JSON.stringify(response.data));
          localStorage.setItem('paymentStatus', response.data.paymentStatus ?? 'No payment status available');
          this.saveSession(response.token, response.role);
          
        })
      );
    }
  }
   saveSession(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }
logout() {
    this.isAuthenticatedSubject.next(false);
    // this.userRoleSubject.next(null);
    localStorage.removeItem('token');
  }
  getRole(): string | null {

    return localStorage.getItem('role');
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isEstudiante(): boolean {
    return this.getRole() === 'ESTUDIANTE';
  }
  getpassword(): string {
    
   return this.getpassword();
  }
  restoreSession() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('userRole');
    this.isAuthenticatedSubject.next(isLoggedIn);
    this.userRoleSubject.next(role);
  }

}