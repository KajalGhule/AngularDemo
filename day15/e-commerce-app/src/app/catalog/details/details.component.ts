import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  // flower: any;
  flower: Product | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getFlowerById(id).subscribe(res => {
      this.flower = res;
    });
  }

  deleteFlower() {
    if (confirm('Are you sure you want to delete?')) {
       const id = String(this.flower!.id);   
      this.productService.delete(id).subscribe(() => {
        alert('Deleted successfully');
        this.router.navigate(['/catalog/list']);
      });
    }
  }
}
