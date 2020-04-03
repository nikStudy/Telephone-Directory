import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';
import { AfterViewInit } from '@angular/core';
import { PersonFilterPipe } from './person-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Phone Directory';

  public person = [];
  searchTerm: any; // search term declaration for custom pipe 'filter'
  
  constructor(private _personService: PersonService) { 
    // subscribe to the observable and assign to local variable
    this._personService.getPerson().subscribe(data => this.person = data);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){

  }

  // function to store the clicked list-item in local storage
  localStorageItem(p:Person) {
    localStorage.setItem("selected-item",JSON.stringify(p));
  }

  // local variable to assign the list-item stored in local storage
  public selectedP:any = JSON.parse(localStorage.getItem("selected-item"));

  // function to automatically select the list-item saved in local storage 
  getSelected(p:Person) {
    let cssClass: any;

    // case: if the local storage is empty then store the first list-item in local storage
    if (localStorage.getItem("selected-item") == null) {
      if ((p.name == this.person[0].name) && (p.mobile == this.person[0].mobile)) {
        cssClass = {
          'selectedClass':true
        }        
      }
      this.localStorageItem(this.person[0]);
    }

    // case: assign the css class to the list-item saved in local storage to make it look like selected
    if ((p.name == this.selectedP.name) && (p.mobile == this.selectedP.mobile)) {
      cssClass = {
        'selectedClass':true
      }        
    } 
    else {
      cssClass = {
        'selectedClass': false
      }        
    }
    return cssClass;
  }

}
