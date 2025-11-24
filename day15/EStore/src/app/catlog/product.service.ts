import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/flowers';

  constructor(private http: HttpClient) { }

  getAllFlowers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getFlowerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
