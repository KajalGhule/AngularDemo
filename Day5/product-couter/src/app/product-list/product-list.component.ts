import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:any;

  constructor(){
    // initialize data members
    // for dependency injection
  }

  ngOnInit(): void {   
    this.products=[
        {"id": 2,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg"},
        {"id": 3,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg"},
        {"id": 4,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg"},
        {"id": 5,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg"},
        {"id": 6,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg"},
        {"id": 7,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg"},
    ]
  }
}
