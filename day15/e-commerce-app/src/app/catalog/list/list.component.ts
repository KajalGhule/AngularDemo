import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product'; 
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
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

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getAllFlowers().subscribe(res => {
      this.flowers = res;
    });
  }
  goToProduct(id:number): void {
    console.log(id);
    this.router.navigate(['/catalog/detail',id]);
  }
}