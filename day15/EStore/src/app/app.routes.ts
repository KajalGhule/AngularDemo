import { Routes } from '@angular/router';
import { ListComponent } from './catlog/list/list.component';
import { DetailComponent } from './catlog/detail/detail.component';

export const routes: Routes = [
//      {
//     path: '',
//     loadChildren: () =>
//       import('./catalog/catlogrouting.module')
//         .then(m => m.CatlogroutingModule)
//   }

     { path: 'list', component: ListComponent },
     { path: 'detail/:id', component: DetailComponent }
];
