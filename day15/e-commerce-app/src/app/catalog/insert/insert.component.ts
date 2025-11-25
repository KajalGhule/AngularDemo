import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
 product: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    imageurl: ""
  };

  constructor(private productService: ProductService, private router: Router) {}
  
  private generateUniqueInt(): number {
    // return Date.now() + Math.floor(Math.random() * 1000);
    return Number(Math.floor(Math.random() * 90000) + 10000); // 5-digit random
  }

  onAdd() {
    this.product.id = this.generateUniqueInt();
    this.productService.add(this.product).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.router.navigate(['/catalog/list']);
      },
      error: (err) => console.error('Error adding product', err)
    });
  }
}
