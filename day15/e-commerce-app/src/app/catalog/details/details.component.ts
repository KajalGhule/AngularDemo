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
  currentProductId:any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentProductId = id;
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

  addToCart(): void {
    const id = this.currentProductId;
    console.log("Adding to cart product with id:", id);
  
    if (!id) {
      console.error("No product ID found!");
      return;
    }
  
    // Retrieve existing cart data from localStorage
    let cart: { [key: string]: number } = JSON.parse(localStorage.getItem('cart') || '{}');
  
    // Check if this product already exists
    if (cart[id]) {
      // Increase quantity
      cart[id] += 1;
    } else {
      // Add new product with quantity 1
      cart[id] = 1;
    }
  
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Show user message
    const quantity = cart[id];
    alert(`${quantity} item${quantity > 1 ? 's' : ''} added to cart!`);
    
    console.log("Cart updated:", cart);
    this.router.navigate(['/catalog/list']);
  }
}
