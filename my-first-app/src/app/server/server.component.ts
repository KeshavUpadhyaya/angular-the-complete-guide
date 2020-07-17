import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  serverId = 10;
  serverStatus = 'offline';

  ngOnInit(): void {}

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
