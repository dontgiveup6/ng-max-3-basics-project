import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 3),
    new Ingredient('Tomatoes', 7),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const found: Ingredient = this.ingredients.find(
      (element: Ingredient) => element.name === ingredient.name
    );

    let totalAm = Number(ingredient.amount);

    if (found) {
      totalAm = Number(found.amount) + Number(ingredient.amount);
      const index = this.ingredients.findIndex(
        (element: Ingredient) => element.name === ingredient.name
      );
      this.ingredients.splice(index, 1);
    }

    this.ingredients.push({ name: ingredient.name, amount: totalAm });
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() {}
}
