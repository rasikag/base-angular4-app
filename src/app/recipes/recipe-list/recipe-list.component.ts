import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('My Test Recipe',
                'This is my recipe description',
                'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907'),
    new Recipe('My Test Recipe',
                'This is my recipe description',
                'https://www.howtocookthat.net/public_html/wp-content/uploads/2017/12/P2390584-550x413.jpg?x19907')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
