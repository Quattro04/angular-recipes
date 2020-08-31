# Angular Recipes

This is a simple web app made with Angular 10 that displays recipes from fetched from https://spoonacular.com/food-api. It supports searching for recipes, getting single recipe information and adding a recipe to favorites list to be displayed seperately.

I used 3 components, one for each page (home, recipe, favorites) and an extra recipe-card component that represents a recipe. That way I could easily import a recipe card wherever I needed it (home page, favorites page and recipe page under "similar" section).

I also implemented a recipe service, that calls the external API through HttpClient.

Favorites are stored in localstorage and the logic is implemented on the recipe-card itself. That way every card is responsible for its own data and this provides a simple solution.

I implemented a few unit test for recipe-card and favorites, for example to check if the localstorage is updated with the correct values when a user adds a recipe to his favorites. I know the number of test as well as what exactly they are testing could be improved a lot, but I am fairly new to testing and I'm looking forward to learn more about it.
