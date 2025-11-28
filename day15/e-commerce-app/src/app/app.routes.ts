import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    redirectTo: 'catalog/list',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catlog-routing/catlog-routing.module').then(m => m.CatlogRoutingModule)
  },
  {
  path: 'cart',
    loadComponent: () =>
      import('./shopping-cart/cart/cart.component').then(m => m.CartComponent)
  },
  {
  path: 'payment',
    loadComponent: () =>
      import('./payment/payment/payment.component').then(m => m.PaymentComponent)
  },
  {
  path: 'order',
    loadComponent: () =>
      import('./order/order/order.component').then(m => m.OrderComponent)
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./order/order-list/order-list.component').then(m => m.OrderListComponent) 
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login/login.component').then(m => m.LoginComponent) 
  }
];
