import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  // { path: 'list', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatlogroutingModule { }
