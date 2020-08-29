/*
    Automatically generated with json2ts.com
*/

export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    lowFodmap: boolean;
    aggregateLikes: number;
    spoonacularScore: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: any[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: any[];
    dishTypes: string[];
    diets: any[];
    occasions: any[];
    winePairing: object;
    instructions: string;
    analyzedInstructions: any[];
    originalId?: any;
    spoonacularSourceUrl: string;
}

export interface RecipeShort {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface SearchResults {
    results: RecipeShort[];
}