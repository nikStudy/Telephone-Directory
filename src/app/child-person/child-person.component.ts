import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-child-person',
  templateUrl: './child-person.component.html',
  styleUrls: ['./child-person.component.scss']
})
export class ChildPersonComponent implements OnInit {

  // transfer data variables from parent to child
  @Input() childSelectedP:Person;
  @Input() childPerson:Person[];
  // constructor() { }
  constructor(private _personService: PersonService) { 
  
  }

  ngOnInit(): void {
  }

  // function to request json data from json file on the json server
  getAllPerson() {
    this._personService.getPerson().subscribe(data => this.childPerson = data);
  }

  // function to update json data into json file on the json server
  putModifiedPerson(id: number, str: string) {
    this._personService.putPerson(id, str).subscribe(
      (data: Person) => {
        this.getAllPerson();
      });
  }

  data:string;
  p: Person;
  str: string;

  // function to update mobile number on click of Save button
  numberSave() {    
    this.p = {
      id: this.childSelectedP.id,
      name: this.childSelectedP.name,
      mobile: parseInt(this.data),
      age: this.childSelectedP.age,
      address: this.childSelectedP.address,
      city: this.childSelectedP.city,
      state: this.childSelectedP.state,
      zip: this.childSelectedP.zip
    };
    this.str = JSON.stringify(this.p);
    this.putModifiedPerson(this.childSelectedP.id, this.str);
  }

}
