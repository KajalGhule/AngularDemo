import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product={
    "id":22,
    "title":"Gerbera",
    "description":"Wedding Flower",
    "imageurl":"/images/gerbera.jpg",
    "likes":67000
  }
}
