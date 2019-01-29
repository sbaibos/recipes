import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeModel: RecipeModel[];
  name = "recipe 1";
  constructor() { }

  ngOnInit() {
  }

  clicked(){
	  
	  console.log('clicked');
	  
  }
}
