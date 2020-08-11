import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/auth.service';
import * as AuthActions from './auth/store/auth.actions';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cook-book';

  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
    this.loggingService.printLog('Hello from app component ngOnInit()');
  }
}
