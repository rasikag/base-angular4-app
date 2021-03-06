import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('My Test Recipe',
                    'This is my recipe description',
                    'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907',
                    [new Ingredient('My Ingredient 01', 5), new Ingredient('My Ingredient 02', 6)]),
        new Recipe('My Test Recipe',
                    'This is my recipe description',
                    'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907',
                    [new Ingredient('My Ingredient 03', 5), new Ingredient('My Ingredient 04', 6)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
