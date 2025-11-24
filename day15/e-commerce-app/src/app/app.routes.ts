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
  }
];
