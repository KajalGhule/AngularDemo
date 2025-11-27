import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../catalog/product';
import { Item } from './models/Item';
import { ProductService } from '../catalog/product.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: Item[] = [];
  private cartSubject = new BehaviorSubject<Item[]>(this.cartItems);
  cart$ = this.cartSubject.asObservable();

  constructor(private productService: ProductService) {}

  addToCart(product: Product) {
    const existing = this.cartItems.find(i => i.productId === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      const id = product.id;
      
      const newItem = new Item(
        product.id ?? 0,
        product.title ?? "",
        product.price ?? 0,
        1,
        product.imageurl ?? ""
      );

      this.cartItems.push(newItem);
    }
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(i => i.productId !== id);
    this.cartSubject.next([...this.cartItems]);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  updateQuantity(id: number, qty: number) {
    const item = this.cartItems.find(i => i.productId === id);
    if (item) {
      item.quantity = qty > 0 ? qty : 1;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

   getFullCart(): Observable<any[]> {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{}');
    const requests = [];

    for (const id in cartData) {
      if (cartData.hasOwnProperty(id)) {
        const quantity = cartData[id];
        const numericId = Number(id);

        // store API call with quantity
        requests.push(
          this.productService.getFlowerById(numericId).pipe(
            map(product => ({
              productId: product.id,
              title: product.title,
              price: product.price,
              quantity: quantity,
              imageUrl: product.imageurl
            }))
          )
        );
      }
    }

    // forkJoin waits for ALL product requests and returns full cart array
    return forkJoin(requests);
  }

}
