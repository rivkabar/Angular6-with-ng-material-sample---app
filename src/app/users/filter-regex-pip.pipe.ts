import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user';
@Pipe({
  name: 'filterRegexPip'
})
export class FilterRegexPipPipe implements PipeTransform {

  transform(value: IUser[], filterBy: string): IUser[] {
    debugger;
    let regexObj = new RegExp(filterBy);
    filterBy = filterBy ? filterBy : null;
    return filterBy ? value.filter((user: IUser) =>
    regexObj.test(user.name.first) || regexObj.test(user.name.last)) : value;

  }

}
