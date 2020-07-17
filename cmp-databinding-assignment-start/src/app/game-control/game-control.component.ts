import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() oddEvent = new EventEmitter<{ data: number }>();
  @Output() evenEvent = new EventEmitter<{ data: number }>();

  i: number;
  timer: any;

  constructor() {
    this.i = 0;
  }

  ngOnInit(): void {}

  startIncrementEvent(): void {
    this.timer = setInterval(() => {
      if (this.i % 2 === 0) {
        console.log(this.i + ' even event emitted');
        this.evenEvent.emit({ data: this.i });
      } else {
        console.log(this.i + ' odd event emitted');
        this.oddEvent.emit({ data: this.i });
      }
      this.i++;
    }, 1000);
  }

  stopIncrement(): void {
    console.log('called stop increment');

    clearInterval(this.timer);
  }
}
