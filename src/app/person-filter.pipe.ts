import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

// create custom pipe to mimic the functionality of Angular JS's filter called 'filter'
@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  // function to mimic the functionality of Angular JS's filter called 'filter'
  transform(person: Person[], searchTerm: string): Person[] {
    // case: when search term is empty
    if (!person || !searchTerm) {
      return person;
    }

    // temporary variable declaration
    var arr1:Person[];
    var arr2:Person[];
    var arr:Person[];

    // case: filter the name parameter
    arr1 = person.filter(p => p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ;
    // case: filter the mobile number parameter
    arr2 = person.filter(p => p.mobile.toString().indexOf(searchTerm) !== -1);
    arr = arr1.concat(arr2);
    return arr;
  }

}
