import * as fromAuth from '../auth/store/auth.reducer';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

export interface State {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}
