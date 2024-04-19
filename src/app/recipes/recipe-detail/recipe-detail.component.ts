import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  recipeParams: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeParams = this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id'] - 1);

      if (!this.recipe) {
        this.router.navigate(['/recipes', +params['id'], 'not-exist']);
        this.recipe = {
          name: '',
          description: '',
          imagePath: '',
          ingredients: [],
        };
      }
    });
  }

  ngOnDestroy() {
    this.recipeParams.unsubscribe();
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
