import { Injectable } from '@angular/core';
import { constants } from "../config";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RecipeService {
    constructor (
        private http: HttpClient
    ) {}

    get(query: string) {
        let apiUrl = constants.apiURL;
        let apiKey = constants.apiKey;

        let url = `${apiUrl}/${query}?apiKey=${apiKey}`;

        console.log('Requesting: ', url);

        return this.http.get(url);
    }
}
