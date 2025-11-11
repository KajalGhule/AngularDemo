import { Component } from '@angular/core';
import {CounterComponent } from '../counter/counter.component';
import { CommonModule } from '@angular/common';
// import { *ngFor } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // // For single product details
  // title = 'Product Component';
  // price = 100;
  // likes = 20;


  // onLikesIncrement(amount: number = 1) {
  //   this.likes += amount;
  // }

  // for multiple products details
  
  products = [
    {
      title: 'Wireless Headphones',
      price: 129.99,
      likes: 5
    },
    {
      title: 'Smart Watch',
      price: 199.99,
      likes: 3
    },
    {
      title: 'Gaming Mouse',
      price: 49.99,
      likes: 10
    }
  ];

  onLikesIncrement(product: any, amount: number = 1) {
    product.likes += amount;
  }

  likeAll() {
    // this.products.forEach(product => product.likes++);
    for (let product of this.products) {
      product.likes++;
    }
  }
}
