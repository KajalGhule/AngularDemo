import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
