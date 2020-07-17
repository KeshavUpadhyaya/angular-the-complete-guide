import { Component, Input } from '@angular/core';
import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.incrementactiveToInactiveCount();
    console.log(this.counterService.activeToInactiveCount);
  }
}
