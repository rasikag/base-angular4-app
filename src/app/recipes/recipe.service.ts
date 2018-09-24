import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('My Test Recipe',
                    'This is my recipe description',
                    'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907'),
        new Recipe('My Test Recipe',
                    'This is my recipe description',
                    'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907')
      ];

    getRecipe() {
        return this.recipes.slice();
    }
}
