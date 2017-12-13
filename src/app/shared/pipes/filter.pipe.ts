import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../../projects/interfaces/Project'
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(obj: any[], args: JSON): any[] {
    
    //Check arguments in the objects
    var err: string = '';
    var checkArguments = function (): boolean {
      for (var key in args) {
        if (!obj[0][key]) {
          err += key + ' not exist in the table properties'
          return false;
        }
      }
      return true;
    }
    
    // Filter function
    if (obj && obj.length) {
      if (checkArguments()) {
        return obj.filter(item => {
          for (var key in args) {
            if (args[key] && item[key].toLowerCase().indexOf(args[key].toLowerCase()) === -1) {
              return false;
            }
          }
          return true;
        })
      } else {
        console.error(err);
        return obj;
      }
    }
    else {
      return obj;
    }
  }

}
