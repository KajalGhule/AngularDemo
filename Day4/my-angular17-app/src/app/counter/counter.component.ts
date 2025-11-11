import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() increment = new EventEmitter<number>();
  
  onLike() {
    this.increment.emit(1);
  }

  onDislike() {
    this.increment.emit(-1);
  }
}
