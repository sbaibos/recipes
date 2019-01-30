import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) { }
  
  
  getRecipes(){
	  
	  return this.http.get('http://sbaibos.com/sotostheme/api/e-fresh-recipies.php');
	  
  }
  
  clicked(){
	  
	  console.log('clicked');
	  
  }
}
