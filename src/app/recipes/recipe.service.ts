import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'This is desc for recipe one',
      'https://www.foodandwine.com/thmb/xCSZU-_i7AoQq5vKvvM4hpDa3OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-beef-chili-step-03-2-FT-RECIPE1222-90d82204e08141e6a7fc01ebc6422c7b.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
    ),
    new Recipe(
      'Recipe Two',
      'This is desc for recipe two',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Recipe Three',
      'This is desc for recipe three',
      'https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg',
      [new Ingredient('Apples', 3), new Ingredient('Tomatoes', 5)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
