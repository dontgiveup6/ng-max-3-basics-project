import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesStartComponent } from '../../recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from '../../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../../recipes/recipe-edit/recipe-edit.component';
import { ErrorPageComponent } from '../../error-page/error-page.component';
import { RecipeNotExistComponent } from '../../recipe-not-exist/recipe-not-exist.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
      },
      { path: ':id/not-exist', component: RecipeNotExistComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
