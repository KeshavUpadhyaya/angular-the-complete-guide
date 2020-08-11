import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Mango fries',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201__340.jpg',
  //     [new Ingredient('Mango', 1), new Ingredient('French fires', 20)]
  //   ),
  //   new Recipe(
  //     'Big fat burger',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201__340.jpg',
  //     [new Ingredient('buns', 2), new Ingredient('potato', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    // getting only a copy
    return this.recipes.slice();
  }

  addIngToShoppingList(ing: Ingredient[]): void {
    // this.slService.addIngredients(ing);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ing));
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe): void {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
