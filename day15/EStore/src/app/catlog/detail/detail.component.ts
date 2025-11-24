import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  flower: any;

  constructor(
    private route: ActivatedRoute,  
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getFlower(id);
  }

  getFlower(id: number) {
    this.productService.getFlowerById(id).subscribe({
      next: (res) => this.flower = res,
      error: (err) => console.log(err)
    });
  }

}
