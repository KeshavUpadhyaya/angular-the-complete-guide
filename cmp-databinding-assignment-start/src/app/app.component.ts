import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenDataElements = [];
  oddDataElements = [];

  createEvenComponent(event: { data: number }) {
    console.log(event.data);

    this.evenDataElements.push(event.data);
  }

  createOddComponent(event: { data: number }) {
    console.log(event.data);

    this.oddDataElements.push(event.data);
  }
}
