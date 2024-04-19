import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-not-exist',
  templateUrl: './recipe-not-exist.component.html',
  styleUrl: './recipe-not-exist.component.css',
})
export class RecipeNotExistComponent implements OnInit {
  recipeId: number;
  recipeParams: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipeService
  ) {}
  ngOnInit() {
    this.recipeParams = this.route.params.subscribe((params: Params) => {
      this.recipeId = params['id'];
      let recipeExist = this.recipesService.getRecipe(+this.recipeId - 1);
      if (recipeExist) {
        this.router.navigate([`/recipes`, `${+this.recipeId}`]);
      }
    });
  }
}
