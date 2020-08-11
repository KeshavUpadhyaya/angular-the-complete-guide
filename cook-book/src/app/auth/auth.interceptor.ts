import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<User>> {
    return this.store.select('auth').pipe(
      take(1),
      // getting the actual user
      map((authState) => {
        return authState.user;
      }),
      exhaustMap((user) => {
        // avoiding adding auth for login and signUp
        if (!user) {
          return next.handle(request);
        }
        const modifiedReq = request.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
