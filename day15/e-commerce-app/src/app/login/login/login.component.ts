import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private api: LoginService, private router: Router) {}

  login() {
    this.api.login(this.username, this.password).subscribe({
      next: () => { 
        console.log('Login successful');
        this.router.navigate(['/dashboard']); 
        // console.log('Login successful111');
      },
      error: (err) => {
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }
}
