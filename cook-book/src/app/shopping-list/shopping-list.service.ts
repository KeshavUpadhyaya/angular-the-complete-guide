import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() {}

  addIngredients(ing: Ingredient[]): void {
    // for (const ingridient of ing) {
    // too many events emitted here....
    //   this.addIngredient(ingridient);
    // }

    this.ingredients.push(...ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
