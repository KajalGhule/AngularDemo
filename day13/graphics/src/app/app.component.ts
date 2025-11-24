import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphicsModule } from './graphics/graphics.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphicsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graphics';
}
