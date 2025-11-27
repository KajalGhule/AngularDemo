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

  constructor(
    private cartService: CartService,
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

  backToList(): void {
    window.history.back();
  }
  backToShop(): void {
    this.router.navigate(['/catalog/list']);  
  }
  // createOrderObject() {
  //   const orderItems = this.cartItems.map(item => ({
  //     productId: item.productId,
  //     qty: item.quantity
  //   }));

  //   return {
  //     id: Math.floor(1000 + Math.random() * 9000),
  //     customerId: 6,
  //     items: orderItems,
  //     status: "PENDING",
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString()
  //   };
  // }

  // placeOrder() {
  //   const order = this.createOrderObject();

  //   this.orderService.createOrder(order).subscribe({
  //     next: (res) => {
  //       alert("Order Created Successfully!");
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       alert("Order Failed!");
  //       console.error(err);
  //     }
  //   });
  // }
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
