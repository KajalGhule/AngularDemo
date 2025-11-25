import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private BASE_URL = 'http://localhost:8000/payments';

  constructor(private http: HttpClient) {}

  payWithCreditCard(data: any) {
    return this.http.post<any>(`${this.BASE_URL}/creditcard`, data);
  }

  payWithDebitCard(data: any) {
    return this.http.post<any>(`${this.BASE_URL}/debitcard`, data);
  }

  payWithUPI(data: any) {
    return this.http.post<any>(`${this.BASE_URL}/upi`, data);
  }

}
