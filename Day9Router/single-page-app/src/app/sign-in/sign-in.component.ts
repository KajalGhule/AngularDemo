import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  ngOnInit() { }

    message: any;
    constructor(public authService: AuthService) {
      this.message = '';
    }

    login(username: string, password: string): boolean {
      this.message = '';
      if (!this.authService.login(username, password)) {
        this.message = 'Incorrect credentials.';
        setTimeout(function() {
          //this.message = '';
        }.bind(this), 2500);
      }
      return false;
    }

    logout(): boolean {
      this.authService.logout();
      return false;
    }
}
