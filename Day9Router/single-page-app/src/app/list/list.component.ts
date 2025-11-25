import { Component } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products:any[]=[]
   

  constructor(private svc:ProductService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.products = this.svc.getAllProducts();
    
  }


  goToProduct(id:number): void {
    console.log(id);
    // this.router.navigate(['./details',id]);
    this.router.navigate(['/lists/details', id]);

  }
}
