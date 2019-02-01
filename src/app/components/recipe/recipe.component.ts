import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import {RECIPES} from '../../mockfiles/mock-recipes';
import {INGREDIENTS} from '../../mockfiles/mock-ingredients';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeModel: RecipeModel[];//initialize recipe model
  ingredientModel: IngredientModel[];//initialize ingredient model
  name = "recipe 1";
  users: Object;
  recipes = RECIPES; //recipes  mockfile
  ingredients = INGREDIENTS;//ingredients  mockfile
  
     
  
  constructor() { }

  ngOnInit() { }

  clicked(){
	  
	  console.log('clicked');
	  
}

selectedRecipe: RecipeModel;

selectedRecipes(recipe: RecipeModel): void { 
  this.selectedRecipe = recipe;
  
	  
	  
	
}


}
