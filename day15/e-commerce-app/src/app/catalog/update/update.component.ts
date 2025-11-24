import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  product: Product | null = null;   // initially null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // read URL id
    this.loadProduct(id);
  }

  loadProduct(id: number) {
    this.productService.getFlowerById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.error("Error fetching product", err);
      }
    });
  }

  onUpdate(updatedProduct: Product) {
    const id = String(updatedProduct.id);
    this.productService.update(id, updatedProduct).subscribe({
      next: () => {
        alert("Product updated successfully!");
        this.router.navigate(['/catalog/list']);
      },
      error: (err) => {
        console.error("Error updating product", err);
      }
    });
  }
}
