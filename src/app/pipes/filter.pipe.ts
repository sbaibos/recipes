import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 transform(value: any, args?: any): any {

        if(!value)return null;
        if(!args)return value;

        
var result = value.filter(function(el){
 return el.recipe_id ==args;
});

       
return result;
      
            console.log(result);
     
    }
}