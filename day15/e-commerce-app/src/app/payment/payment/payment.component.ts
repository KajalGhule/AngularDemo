import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../order/order.service';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  method: string = "";  // CREDIT_CARD, DEBIT_CARD, UPI
  amount: number = 0;   // Total amount (you can get from cart later)

  // COMMON FIELDS
  orderId: number = 5000;
  customerId: number = 15;

  // CREDIT & DEBIT
  cardNumber: string = "";
  cardHolder: string = "";
  expiry: string = "";
  bankName: string = "";

  // UPI
  upiId: string = "";

  constructor(private paymentService: PaymentService, private router: Router, private orderService: OrderService) {
      const nav = history.state;
      this.amount = nav.total || 0;  
      
  }

  // makePayment() {
  //   let details: any = {};

  //   // Build details object based on method
  //   if (this.method === "CREDIT_CARD") {
  //     details = {
  //       cardNumber: this.cardNumber,
  //       cardHolder: this.cardHolder,
  //       expiry: this.expiry
  //     };
  //   }

  //   if (this.method === "DEBIT_CARD") {
  //     details = {
  //       cardNumber: this.cardNumber,
  //       bankName: this.bankName
  //     };
  //   }

  //   if (this.method === "UPI") {
  //     details = {
  //       upiId: this.upiId
  //     };
  //   }

  //   // Build final payment object
  //   const paymentData = {
  //     id: Math.floor(1000 + Math.random() * 9000),   // unique random id
  //     orderId: this.orderId,
  //     customerId: this.customerId,
  //     method: this.method,
  //     amount: this.amount,
  //     details: details,
  //     status: "SUCCESS",
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString()
  //   };

  //   console.log("Sending Payment:", paymentData);

  

  // if (this.method === 'CREDIT_CARD') {
  //   this.paymentService.payWithCreditCard(paymentData).subscribe({
  //     next: (res) => {
  //       alert("Payment Successful!");
  //       console.log(res);
  //       localStorage.removeItem('cart');
  //       this.router.navigate(['/catalog/list']);
  //     },
  //     error: (err) => {
  //       alert("Payment Failed!");
  //       console.error(err);
  //     }
  //   });

  // } else if (this.method === 'DEBIT_CARD') {
  //   this.paymentService.payWithDebitCard(paymentData).subscribe({
  //     next: (res) => {
  //       alert("Payment Successful!");
  //       console.log(res);
  //       localStorage.removeItem('cart');
  //       this.router.navigate(['/catalog/list']);
  //     },
  //     error: (err) => {
  //       alert("Payment Failed!");
  //       console.error(err);
  //     }
  //   });

  // } else if (this.method === 'UPI') {
  //   this.paymentService.payWithUPI(paymentData).subscribe({
  //     next: (res) => {
  //       alert("Payment Successful!");
  //       console.log(res);
  //       localStorage.removeItem('cart');
  //       this.router.navigate(['/catalog/list']);
  //     },
  //     error: (err) => {
  //       alert("Payment Failed!");
  //       console.error(err);
  //     }
  //   });
    
  // } else {
  //   alert("Please select a valid payment method!");
  // }
  // }

  makePayment() {
  let details: any = {};

  // Build details object based on method
  if (this.method === "CREDIT_CARD") {
    details = {
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expiry: this.expiry
    };
  }

  if (this.method === "DEBIT_CARD") {
    details = {
      cardNumber: this.cardNumber,
      bankName: this.bankName
    };
  }

  if (this.method === "UPI") {
    details = {
      upiId: this.upiId
    };
  }

  // Payment Object
  const paymentData = {
    id: Math.floor(1000 + Math.random() * 9000),
    orderId: this.orderId,
    customerId: this.customerId,
    method: this.method,
    amount: this.amount,
    details: details,
    status: "SUCCESS",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  console.log("Sending Payment:", paymentData);


  // ------------------------------
  // 🔥 MID STEP → Build ORDER OBJECT
  // ------------------------------
  // const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartData = JSON.parse(localStorage.getItem('cart') || '{}');

  const cart = Object.keys(cartData).map(id => ({
    productId: Number(id),
    quantity: cartData[id]
  }));

  // const order = {
  //   id: Math.floor(1000 + Math.random() * 9000),
  //   customerId: this.customerId,
  //   items: cart.map((i: any) => ({
  //     productId: i.productId,
  //     qty: i.quantity
  //   })),
  //   status: "PENDING",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString()
  // };

  const order = {
  customerId: this.customerId,
  items: cart.map(item => ({
    productId: item.productId,
    qty: item.quantity
  })),
  status: "PENDING",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

  // ------------------------------
  // PAYMENT + ORDER
  // ------------------------------

  let paymentApiCall;

  if (this.method === 'CREDIT_CARD') {
    paymentApiCall = this.paymentService.payWithCreditCard(paymentData);

  } else if (this.method === 'DEBIT_CARD') {
    paymentApiCall = this.paymentService.payWithDebitCard(paymentData);

  } else if (this.method === 'UPI') {
    paymentApiCall = this.paymentService.payWithUPI(paymentData);

  } else {
    alert("Please select a valid payment method!");
    return;
  }


  paymentApiCall.subscribe({
    next: (res) => {
      alert("Payment Successful!");
      console.log(res);

      // STEP 2 → Place Order
      this.orderService.placeOrder(order).subscribe({
        next: (orderRes) => {
          console.log("Order created:", orderRes);

          // STEP 3 → Clear Cart
          // localStorage.removeItem('cart');

          // STEP 4 → Redirect
          this.router.navigate(['/order']);
        },
        error: (err) => {
          alert("Order Failed After Payment!");
          console.error(err);
        }
      });
    },
    error: (err) => {
      alert("Payment Failed!");
      console.error(err);
    }
  });

}

}
