import { Injectable } from '@angular/core';
import { Item as CartItem, Item } from './models/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Item[] = [
    {
      productId: 1,
      title: "rose",
      price: 15,
      quantity: 2,
      imageUrl: "/assets/images/rose.jpg"
    },
    {
      productId: 2,
      title: "lotus",
      price: 30,
      quantity: 4,
      imageUrl: "/assets/images/lotus.jpg"
    }
  ]

  private storageKey = 'shoppingCart';

  constructor() {
    // Initialize sessionStorage with demo data if empty
    if (!sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.products));
    }

  }

  // //Add Product to Cart
  // addToCart(item: CartItem): void {

  // }

  // //Get All Cart Items
  // getCartItems(): CartItem[] {
  //   const stored = sessionStorage.getItem(this.storageKey);
  //   if (stored) {
  //     return JSON.parse(stored) as Item[];
  //   }
  //   else
  //     return [];
  // }

  // //Update Quantity
  // updateQuantity(productId: number, quantity: number): void {

  // }

  // //Remove Product from Cart
  // removeFromCart(productId: number): void {
  //   let cartItems = this.getCartItems();
  //   let remainingItem = cartItems.filter(item => item.productId != productId);
  //   this.saveCart(remainingItem);
  // }

  // //Clear Entire Cart
  // clearCart(): void {
  //   this.saveCart([]);
  // }

  // //Calculate Total Items
  // getTotalItems(): number {
  //   let items = this.getCartItems();
  //   return items.length;
  // }

  // //Calculate Total Amount
  // getTotalPrice(): number {
  //   let cartItemstems = this.getCartItems();
  //   console.log(cartItemstems.length);
  //   let totalPrice = cartItemstems.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );
  //   return totalPrice;
  // }

  // // Private helper
  // private saveCart(cart: CartItem[]): void {
  //   sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  // }



  //Add Product to Cart
  addToCart(item: CartItem): void {
    let items = this.getCartItems();
    const existingItem = items.find((i) => i.productId === item.productId);

    if (existingItem) {
      // If item exists, increment quantity
      existingItem.quantity += 1;
    } else {
      // If item doesn't exist, add it to cart
      items.push(item);
    }

    this.saveCart(items);
  }

  //Get All Cart Items
  getCartItems(): CartItem[] {
    let items = sessionStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
    let items = this.getCartItems();
    const item = items.find((i) => i.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart(items);
    }
  }

  //Remove Product from Cart
  removeFromCart(productId: number): void {
    let items = this.getCartItems();
    items = items.filter((item) => item.productId !== productId);
    this.saveCart(items);
  }

  //Clear Entire Cart
  clearCart(): void {
    this.saveCart([]);
  }

  //Calculate Total Items
  getTotalItems(): number {
    return 45;
  }

  //Calculate Total Amount
  getTotalPrice(): number {
    let items = this.getCartItems();
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    // Save cart to sessionStorage
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
