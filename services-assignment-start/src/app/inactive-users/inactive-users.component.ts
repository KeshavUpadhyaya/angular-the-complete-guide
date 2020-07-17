import { Component, Input } from '@angular/core';
import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.incrementinactiveToActiveCount();
    console.log(this.counterService.inactiveToActiveCount);
  }
}
