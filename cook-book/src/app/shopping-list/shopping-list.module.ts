import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
  ],
  // providers: [LoggingService],
})
export class ShoppingListModule {}
