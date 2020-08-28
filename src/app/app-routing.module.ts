import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { RecipeComponent } from "./recipe/recipe.component";

const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full", component: AppComponent },
    { path: "recipe/:id", component: RecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
