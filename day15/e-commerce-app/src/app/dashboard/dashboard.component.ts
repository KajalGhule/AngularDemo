import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent implements OnInit{
  role = "";
  constructor(private auth: LoginService, private router: Router) {}
  
  ngOnInit() {
    this.role = this.auth.getRole();
    console.log("ROLE FROM TOKEN =", this.role);
    if (this.role === 'Customer') {
      // this.router.navigate(['/catalog/list']);
      this.router.navigate(['/catalog/list'], { replaceUrl: true });

    }
  }

  openOrders(status: string) {
    this.router.navigate(['/orders'], { queryParams: { status } });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
