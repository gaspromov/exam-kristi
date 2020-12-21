import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], searchParam: string, field: string){

    if ( arr && searchParam && field ){

      arr = arr.filter( ell => 
        ell[field].toLowerCase().includes(searchParam)  
      )

    }

    return arr;
  }

}
