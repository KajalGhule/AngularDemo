import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule]
  ,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<number>();
  OnRemoveClick(productId: number): void {
    console.log("Item onremoveclick");
    this.remove.emit(productId);
  }
}
