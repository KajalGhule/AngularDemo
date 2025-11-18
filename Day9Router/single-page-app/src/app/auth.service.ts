import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
      if (user === 'kajal' && password === 'grow') {
      localStorage.setItem('username', user);
      let status = localStorage.getItem("loggedInStatus");
      if( status === null || status=="false"){
        localStorage.setItem("loggedInStatus","true");
      }
      return true;
    }
    return false;
  }

  logout(): any { 
    localStorage.removeItem('username'); 
    localStorage.removeItem('loggedInStatus'); 
  }
  getUser(): any { 
    return localStorage.getItem('username'); 
  }

  isLoggedIn(): boolean { return this.getUser() !== null;}
}
