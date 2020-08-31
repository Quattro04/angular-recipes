import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

    public recipes: Array<any>

    constructor() { }

    ngOnInit(): void {
        this.getFavorites()
    }

    public onFavoriteChange(e) {
        this.getFavorites()
    }

    public getFavorites() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        console.log('GOT FAVORITES: ', favorites)
        if (!favorites) favorites = []
        this.recipes = favorites.map(recipe => {
            return JSON.parse(recipe)
        })
    }
}
