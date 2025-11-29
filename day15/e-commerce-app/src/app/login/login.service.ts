import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private http: HttpClient) {}
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('jwt');
    }
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
  login(username: string, password: string) {
    return this.http.post('http://localhost:8000/auth/login', { username, password });
  }
}
