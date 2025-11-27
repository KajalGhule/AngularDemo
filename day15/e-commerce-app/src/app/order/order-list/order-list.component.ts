import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../catalog/product.service';
@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrderService, private productService: ProductService) {}

  ngOnInit(): void {
  this.loadOrders();
}

loadOrders() {
  this.orderService.getAllOrders().subscribe((orders: any[]) => {
    this.orders = orders;
     this.orders = orders.filter(order => order.status === 'PENDING');
    this.orders.forEach(order => {
      order.items.forEach((item: any) => {

        this.productService.getFlowerById(item.productId)
          .subscribe(product => {
            item.productDetails = product;   // attach product info
          });

      });
    });

  });
}


  approve(id: number) {
    this.orderService.approveOrder(id).subscribe(() => {
      alert("Order Approved!");
      this.loadOrders(); // refresh list
    });
  }

  reject(id: number) {
    this.orderService.rejectOrder(id).subscribe(() => {
      alert("Order Rejected!");
      this.loadOrders();
    });
  }

  cancel(id: number) {
    this.orderService.cancelOrder(id).subscribe(() => {
      alert("Order Cancelled!");
      this.loadOrders();
    });
  }
}