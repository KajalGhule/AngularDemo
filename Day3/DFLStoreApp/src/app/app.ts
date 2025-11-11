import { CounterComponent } from './counter/counter.component';
import { Component, signal } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';



  @Component({
    selector: 'app-root',
    imports: [CounterComponent, ProductDetailsComponent, FormsModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })

export class AppComponent {
  title = 'Welcome to My First Angular App!';
  initialCount:number = 0;
}