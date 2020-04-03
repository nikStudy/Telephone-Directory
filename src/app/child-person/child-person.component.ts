import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child-person',
  templateUrl: './child-person.component.html',
  styleUrls: ['./child-person.component.scss']
})
export class ChildPersonComponent implements OnInit {

  @Input() childSelectedP:Person;
  @Input() childPerson:Person[];
  constructor() { }

  ngOnInit(): void {
  }

  data:string;
  numberSave(i:number) {
    this.childPerson[i].mobile = parseInt(this.data);
  }

}
