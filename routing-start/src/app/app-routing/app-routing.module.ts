import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { HomeComponent } from '../home/home.component';
import { CanDeactivateGuard } from '../servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerResolver } from '../servers/server/server-resolver.service';
import { ServerComponent } from '../servers/server/server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { UsersComponent } from '../users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    // canActivate: [AuthGaurdService],
    component: ServersComponent,
    canActivateChild: [AuthGaurdService],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent,
  // },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found !' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
