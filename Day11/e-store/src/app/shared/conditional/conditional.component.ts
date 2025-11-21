import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
 billingPrice: number = 123;
  productionCost: number = 400;
  flower: string = 'Lilly';
  bestFlower: string = 'Marigold';

  isFlowerAvailable(): boolean {
    return true;
  }
}
