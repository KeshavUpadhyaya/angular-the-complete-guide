import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCount: number;
  inactiveToActiveCount: number;
  counts: Number[] = [0, 0];

  constructor() {
    this.activeToInactiveCount = 0;
    this.inactiveToActiveCount = 0;
  }

  incrementactiveToInactiveCount(): void {
    this.activeToInactiveCount++;
    this.counts[0] = this.activeToInactiveCount;
  }

  incrementinactiveToActiveCount(): void {
    this.inactiveToActiveCount++;
    this.counts[1] = this.inactiveToActiveCount;
  }
}
