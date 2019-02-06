import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 transform(value: any, args?: any): any {

       // if(!value)return null;
       // if(!args)return value;


//------------older function-----------
        
//var result = value.filter(function(find){
 //return find.recipe_id ==args;
 
//});
//------------older function ends-----------

var result = value.filter(find => (find.recipe_id == args));

       
return result;
      
            //console.log(result);
     
    }
}