import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
