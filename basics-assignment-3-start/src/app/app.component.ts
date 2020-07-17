import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showParagraph: boolean;
  timeArray: number[];
  index: number;

  constructor() {
    this.showParagraph = true;
    this.index = 1;
    this.timeArray = [];
  }

  toggleParagraph(): void {
    console.log(this.showParagraph);

    this.timeArray.push(this.index);
    this.index++;

    if (this.showParagraph === true) {
      this.showParagraph = false;
    } else {
      this.showParagraph = true;
    }
  }

  getColor(i: number): any {
    if (i >= 5) {
      return 'blue';
    }
  }
}
