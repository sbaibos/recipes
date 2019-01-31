import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RECIPES} from '../../mockfiles/mock-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeModel: RecipeModel[];
  name = "recipe 1";
  users: Object;
  recipes = RECIPES; //the mockfile
  
     
  
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
