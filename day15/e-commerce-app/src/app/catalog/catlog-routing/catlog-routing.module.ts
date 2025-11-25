import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DetailsComponent } from '../details/details.component'
import { UpdateComponent } from '../update/update.component';
import { InsertComponent } from '../insert/insert.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add', component: InsertComponent }
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatlogRoutingModule { }
