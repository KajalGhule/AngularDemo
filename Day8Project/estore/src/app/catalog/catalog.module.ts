import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './products/details/details.component';
import { ListComponent } from './products/list/list.component';

@NgModule({
  declarations: [],
  imports: [ CommonModule, DetailsComponent, ListComponent ],
  exports: [ DetailsComponent, ListComponent]
})
export class CatalogModule { }
