import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
  
  clicked(){
	  
	  console.log('clicked');
	  
  }
}
