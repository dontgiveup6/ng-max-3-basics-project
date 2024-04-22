import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  recipeParams: Subscription;
  id: number;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeParams = this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;
      console.log(this.editMode);

      if (params['id']) {
        this.id = +params['id'];
        let recipe = this.recipeService.checkForRecipe(params);
      }
    });
  }
}
