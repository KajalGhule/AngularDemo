import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product'; 
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginService } from '../../login/login.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  // flowers: any[] = [];
  flowers: Product[] = [];
  customerId = 0;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: LoginService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decoded: any = jwtDecode(token);
      this.customerId = decoded.id; // logged-in customer ID
    }

    this.productService.getAllFlowers().subscribe(res => {
      this.flowers = res;
    });
  }
  goToProduct(id:number): void {
    console.log(id);
    this.router.navigate(['/catalog/detail',id]);
  }

  showOrderHistory() {
    this.router.navigate(['/orders'], {
      queryParams: { customerId: this.customerId }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}