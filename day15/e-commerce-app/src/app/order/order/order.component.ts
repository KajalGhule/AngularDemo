import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shopping-cart/cart.service';
import { Item } from '../../shopping-cart/models/Item';
import { CommonModule } from '@angular/common';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  cartItems: Item[] = [];
  orderId!: number;
  constructor(
    private cartService: CartService,
     private orderService: OrderService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cartService.getFullCart().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  getGrandTotal(): number {
    return this.cartItems.reduce((sum, x) => sum + (x.price * x.quantity), 0);
  }

  backToShop(): void {
    this.router.navigate(['/catalog/list']);  
  }
  
}











// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../shopping-cart/cart.service';
// import { Item } from '../../shopping-cart/models/Item';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-order',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './order.component.html',
//   styleUrl: './order.component.css'
// })
// export class OrderComponent implements OnInit {
//   cartItems: Item[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit() {
//     this.cartService.getFullCart().subscribe(cartItems => {
//       this.cartItems = cartItems;
//       console.log(this.cartItems);
//     });
//   }

//   getGrandTotal(): number {
//    return this.cartItems.reduce((sum, x) => sum + (x.price * x.quantity), 0);
//   }


// }
