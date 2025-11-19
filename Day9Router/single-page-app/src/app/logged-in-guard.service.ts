import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {
  
  constructor(private authService: AuthService) {
    console.log("constructor is invoked !");
  }
  //overriding
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}
