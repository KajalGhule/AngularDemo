import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

  @Component({
    selector: 'app-root',
    // imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })

// export class App {
//   protected readonly title = signal('DFLStoreApp');
// }


export class AppComponent {
  title = 'Welcome to My First Angular App!';
}