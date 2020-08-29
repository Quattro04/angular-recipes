import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full", component: HomeComponent },
    { path: "recipe/:id", component: RecipeComponent },
    { path: "favorites", component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
