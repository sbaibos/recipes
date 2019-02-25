import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import {RECIPES} from '../../mockfiles/mock-recipes';
import {INGREDIENTS} from '../../mockfiles/mock-ingredients';
//import { FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  recipeModel: RecipeModel[];//initialize recipe model
  ingredientModel: IngredientModel[];//initialize ingredient model
 
  users: Object;
  recipes = RECIPES; //recipes  mockfile
  ingredients = INGREDIENTS;//ingredients  mockfile

  selectedRecipeModel = null;
  
   
    ingredient_sum:any
  
  constructor() {



   }

  

   

  ngOnInit() {


   }

  

selectedRecipe: RecipeModel;

selectedRecipes(recipe: RecipeModel): void { 
  this.selectedRecipe = recipe;
  }

checkboxes = [
    {
      value: 1,
      selected: false
    },
    {
      value: 5,
      selected: false
    },
    {
      value: 4,
      selected: false
    },
    {
      value: 8,
      selected: false
    }
  ]

  public getSelected() {
    let result = this.ingredients.filter((ingredient) => { return ingredient.selected })
                     .map((ingredient) => { return ingredient.price });
    console.log(result);

    if (result === undefined || result.length == 0) {
    // array empty or does not exist
 return this.ingredient_sum = "please select ingredient";
} else{

const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(result.reduce(reducer));
  
   return this.ingredient_sum = result.reduce(reducer) / 100 + " €";

}

    
}



clear(event){

 let result = this.ingredients.filter((ingredient) => { return ingredient.selected = false })

if (result === undefined || result.length == 0) {
    // array empty or does not exist
 return this.ingredient_sum = "";
}


}


}

