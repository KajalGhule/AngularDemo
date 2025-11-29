// import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../order.service';
// import { CommonModule } from '@angular/common';
// import { ProductService } from '../../catalog/product.service';
// @Component({
//   selector: 'app-order-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './order-list.component.html',
//   styleUrl: './order-list.component.css'
// })
// export class OrderListComponent implements OnInit {

//   orders: any[] = [];

//   constructor(private orderService: OrderService, private productService: ProductService) {}

//   ngOnInit(): void {
//     this.loadOrders();
//   }

//   loadOrders() {
//     this.orderService.getAllOrders().subscribe((orders: any[]) => {
//       this.orders = orders;
//        this.orders = orders.filter(order => order.status === 'PENDING');
//       this.orders.forEach(order => {
//         order.items.forEach((item: any) => {
//           this.productService.getFlowerById(item.productId)
//             .subscribe(product => {
//               item.productDetails = product;   // attach product info
//             });
//         });
//       });
//     });
//   }

//   approve(id: number) {
//     this.orderService.approveOrder(id).subscribe(() => {
//       alert("Order Approved!");
//       this.loadOrders(); // refresh list
//     });
//   }

//   reject(id: number) {
//     this.orderService.rejectOrder(id).subscribe(() => {
//       alert("Order Rejected!");
//       this.loadOrders();
//     });
//   }

//   cancel(id: number) {
//     this.orderService.cancelOrder(id).subscribe(() => {
//       alert("Order Cancelled!");
//       this.loadOrders();
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../catalog/product.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orders: any[] = [];
  filteredOrders: any[] = [];
  userRole: string = '';
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private auth: LoginService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userRole = this.auth.getRole();

    console.log("User Role =", this.userRole);  
    
    this.route.queryParams.subscribe(params => {
      const status = params['status'] || 'ALL';
      const customerId = params['customerId'];

      if (customerId) {
        this.loadCustomerOrders(customerId);
      } else {
        this.loadOrders(status);
      }
    });
  }

  loadOrders(status: string) {

    this.orderService.getAllOrders().subscribe((orders: any[]) => {
      this.orders = orders;

      // Attach product info
      this.orders.forEach(order => {
        order.items.forEach((item: any) => {
          this.productService.getFlowerById(item.productId)
            .subscribe(product => {
              item.productDetails = product;
            });
        });
      });

      // Apply dynamic filter
      if (status === 'ALL') {
        this.filteredOrders = this.orders;
      } else {
        this.filteredOrders = this.orders.filter(
          order => order.status === status
        );
      }
    });
  }

  approve(id: number) {
    this.orderService.approveOrder(id).subscribe(() => {
      alert("Order Approved!");
      this.refresh();
    });
  }

  reject(id: number) {
    this.orderService.rejectOrder(id).subscribe(() => {
      alert("Order Rejected!");
      this.refresh();
    });
  }

  cancel(id: number) {
    this.orderService.cancelOrder(id).subscribe(() => {
      alert("Order Cancelled!");
      this.refresh();
    });
  }

  refresh() {
    const currentStatus = this.route.snapshot.queryParamMap.get('status') || 'ALL';
    this.loadOrders(currentStatus);
  }

  loadCustomerOrders(customerId: number) {
  this.orderService.getOrdersByCustomer(customerId).subscribe((orders: any[]) => {
    this.orders = orders; // all orders (pending + past)
    this.attachProducts(this.orders);

    // Show all orders by default
    this.filteredOrders = this.orders;
  });
}

  attachProducts(orders: any[]) {
    orders.forEach(order => {
      order.items.forEach((item: any) => {
        this.productService.getFlowerById(item.productId)
          .subscribe(product => {
            item.productDetails = product;
          });
      });
    });
  }

}
