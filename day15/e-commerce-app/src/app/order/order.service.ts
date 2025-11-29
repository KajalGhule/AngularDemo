import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8000/orders';  // your backend URL

  constructor(private http: HttpClient) {}

  createOrder(order: any): Observable<any> {
    return this.http.post(this.baseUrl, order);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  approveOrder(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/approve`, {});
  }

  rejectOrder(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/reject`, {});
  }

  cancelOrder(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/cancel`, {});
  }

  placeOrder(order: any) {
    return this.http.post(`${this.baseUrl}`, order);
  }

  getOrdersByCustomer(customerId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/customer/${customerId}`);
  }

}
