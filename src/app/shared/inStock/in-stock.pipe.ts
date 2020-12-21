import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inStock'
})
export class InStockPipe implements PipeTransform {

  transform(arr: any[], onlyInStock: boolean = false): unknown {

    if ( arr && onlyInStock ){

      arr = arr.filter( ell => 
          Number(ell.count) > 0
        )

    }

    return arr;
  }

}
