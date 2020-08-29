import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

    public id: string;
    public recipe: Recipe;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get("id");
            this.getRecipeInfo()
        })
    }

    private getRecipeInfo() {    
        this.recipeService.get(`recipes/${this.id}/information`, '')
            .subscribe((response: Recipe) => {
                this.recipe = response
            }, (error: any) => {
                console.log("Error getting recipe info: ", error);
            });
    }
}
