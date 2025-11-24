import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  flowers: any[] = [];

  constructor(private flowerService: ProductService) {}

  ngOnInit(): void {
    this.loadFlowers();
  }

  loadFlowers() {
    this.flowerService.getAllFlowers().subscribe({
      next: (res) => this.flowers = res,
      error: (err) => console.log(err)
    });
  }

}
