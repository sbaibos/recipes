import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeModel: RecipeModel[];
  name = "recipe 1";
  constructor(private recipes:RecipesService) { }

  ngOnInit() {
  }

  clicked(){
	  
	  this.recipes.clicked();
	  
  }
}
