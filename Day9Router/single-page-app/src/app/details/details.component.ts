import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CounterComponent, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

currentProductId:any;
  @Input () product: Product|undefined;

  constructor(private router:Router,private route: ActivatedRoute, 
              private productService: ProductService) {  }
  
  ngOnInit() { 
    this.currentProductId=this.route.snapshot.paramMap.get("id");
    this.product=this.productService.getProductById(this.currentProductId);
  };
 
  onUpdate(data:any){
     if(this.product != undefined)
        this.product.likes=data.count;
      this.productService.updateProduct(this.product);
   }
   

  goToUpdate(): void {
   let  id=this.currentProductId;
   console.log("Updating product with id:", id);
   this.router.navigate(['lists/update/', id]);
  }

  goToDelete(id:number): void {
    console.log("Deleting product with id:", id);
    this.router.navigate(['lists/delete/', id]);
  }

}
