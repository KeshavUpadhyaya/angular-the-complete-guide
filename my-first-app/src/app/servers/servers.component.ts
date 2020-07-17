import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TEST SERVER';
  serverCreationStatus = 'no server created!';
  serverCreated = false;
  servers = ['Test server', 'test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
