import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mango fries',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201__340.jpg',
      [new Ingredient('Mango', 1), new Ingredient('French fires', 20)]
    ),
    new Recipe(
      'Big fat burger',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201__340.jpg',
      [new Ingredient('buns', 2), new Ingredient('potato', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    // getting only a copy
    return this.recipes.slice();
  }

  addIngToShoppingList(ing: Ingredient[]): void {
    this.slService.addIngredients(ing);
  }
}
