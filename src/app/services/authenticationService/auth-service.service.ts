import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080/dx-emp-list-api/v1/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: LoginRequest): Observable<any> {
    console.log(`inside auth login`)
    return this.http.post(`${this.baseUrl}/login`, credentials, { headers: { 'Content-Type': 'application/json' }});
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    console.log(!!token);
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
