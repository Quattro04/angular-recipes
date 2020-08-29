import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { RecipeService } from "../recipe.service";
import { RecipeShort, SearchResults } from "../recipe.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    public recipes: RecipeShort[]               // Recipes that are displayed on page
    public allRecipes: RecipeShort[]            // Always contains all recipes so search autofill has everything
    public myControl = new FormControl();
    public autofillOptions: string[];           // All recipe names for autofill (filled only on init)
    public filteredOptions: string[];           // Filtered recipe names, dependent on what user typed in input

    constructor(
        private recipeService: RecipeService
    ) {}

    ngOnInit() {
        this.getAllRecipes()
    }

    private getAllRecipes() {    
        this.recipeService.get('recipes/complexSearch', 'number=100')
            .subscribe((response: SearchResults) => {
                this.allRecipes = response.results
                this.recipes = response.results
                this.autofillOptions = this.recipes.map(value => value.title)
            }, (error: any) => {
                console.log("Error getting recipes: ", error);
            });
    }

    public inputChange(e) {
        this.filteredOptions = this.autofillOptions.filter(option => option.toLowerCase().includes(e.toLowerCase()))
    }

    public Search() {
        this.recipeService.get('recipes/complexSearch', `query=${this.myControl.value}`)
            .subscribe((response: SearchResults) => {
                this.recipes = response.results
            }, (error: any) => {
                console.log("Error getting recipes by query: ", error);
            });
    }
}
