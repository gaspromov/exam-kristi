import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], param: string){

    if ( arr && param ){
      console.log('herer')
      arr = arr.sort( (a,b) => {
        if ( param == 'count1'){
          if ( Number(a.count) < Number(b.count) )
            return 1;
          if ( Number(a.count) > Number(b.count) )
            return -1;
          return 0;
        }else if (param == 'count2'){
          if ( Number(a.count) < Number(b.count) )
            return -1;
          if ( Number(a.count) > Number(b.count) )
            return 1;
          return 0;
        }else if (param == 'price1'){
          if ( Number(a.price) < Number(b.price) )
            return 1;
          if ( Number(a.price) > Number(b.price) )
            return -1;
          return 0;
        }else if (param == 'price2'){
          if ( Number(a.price) < Number(b.price) )
            return -1;
          if ( Number(a.price) > Number(b.price) )
            return 1;
          return 0;
        }
      })
      console.log(arr);
      return arr
    }

    return arr;
  }

}
