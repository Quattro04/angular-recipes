import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RecipeShort, } from "../../recipe.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

    @Input() recipe: RecipeShort;

    @Output() favoriteChange = new EventEmitter<boolean>();

    public isFavorite: boolean;

    constructor() { }

    ngOnInit() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) return
        if (favorites.includes(JSON.stringify(this.recipe))) this.isFavorite = true
    }

    public favorite() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) favorites = []
        if (favorites.includes(JSON.stringify(this.recipe))) {
            const idx = favorites.indexOf(JSON.stringify(this.recipe), 0);
            favorites.splice(idx, 1);
            this.isFavorite = false
        } else {
            favorites.push(JSON.stringify(this.recipe))
            this.isFavorite = true
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        this.favoriteChange.emit(true);
    }

}
