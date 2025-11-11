import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

    //data member
     @Input() count:number=0;
    // count = 1;

    increment():void {
      // alert("increse count value");
      this.count++;
   }

   decrement():void{
    // alert("decrease count value");
    this.count--;
   }

}
