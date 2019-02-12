import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import {RECIPES} from '../../mockfiles/mock-recipes';
import {INGREDIENTS} from '../../mockfiles/mock-ingredients';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';




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
  
     form :FormGroup;
    ingredient_sum:number
  
  constructor(private formBuilder: FormBuilder) {

const controls = this.ingredients.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.form = this.formBuilder.group({
      ingredients: new FormArray(controls)
    });

   }

  submit() {

    //map the values
    const selectedOrderIds = this.form.value.ingredients
      .map((v, i) => v ? this.ingredients[i].price : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);

//add the values

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(selectedOrderIds.reduce(reducer));
  
   return this.ingredient_sum = selectedOrderIds.reduce(reducer);
  
   
  
  }

   

  ngOnInit() {


   }

  

selectedRecipe: RecipeModel;

selectedRecipes(recipe: RecipeModel): void { 
  this.selectedRecipe = recipe;
  }





}

