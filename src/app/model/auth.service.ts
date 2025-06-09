



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

          localStorage.setItem('userRole', response.role);
          localStorage.setItem('isLoggedIn', 'true');
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

  restoreSession() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('userRole');
    this.isAuthenticatedSubject.next(isLoggedIn);
    this.userRoleSubject.next(role);
  }

}