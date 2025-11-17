import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
 
  @Input () product: Product|undefined;

  ngOnInit() {}
    
 
   onUpdate(data:any){
     if(this.product != undefined)
         this.product.likes=data.count;
   }
}
