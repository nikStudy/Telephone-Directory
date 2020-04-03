import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

// create custom pipe to alphabetically sort the person list
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  // function to alphabetically sort the person list
  transform(person: Person[], name: string): Person[] {
    return person.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }

}
