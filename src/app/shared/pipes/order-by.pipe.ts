import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(obj: any[], orderKey: string, reverse:boolean = false): any {

    //Check arguments in the objects
    var err: string = '';
    var checkArguments = function (): boolean {
      if (!obj[0][orderKey]) {
        err += orderKey + ' not exist in the table properties'
        return false;
      }
      return true;
    }

    // compare function
    var compare = function (a, b, orderKey, reverse): number {
      if (!reverse) {
        return (a[orderKey] > b[orderKey]) ? 1 : ((b[orderKey] > a[orderKey]) ? -1 : 0);
      } else {
        return (a[orderKey] < b[orderKey]) ? 1 : ((b[orderKey] < a[orderKey]) ? -1 : 0);
      }
    }

    // orderBy function
    if (obj && obj.length) {
      if (checkArguments()) {
        return obj.sort(function (a, b) {
          return compare(a, b, orderKey, reverse);
        });
      }
      else {
        console.error(err)
        return obj;
      }
    } else return obj;
  }

}
