import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = 'http://localhost:8000/flowers';
   

  constructor(private http: HttpClient) {}

  getAllFlowers(): Observable<any[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getFlowerById(id: number): Observable<any> {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  update(id: string, body: any) {
    return this.http.put(`${this.BASE_URL}/${id}`, body);
  }

  delete(id: string) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  add(product: Product) {
    return this.http.post<Product>(this.BASE_URL, product);
  }

}
