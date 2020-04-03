import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // declare and assign variable to store the address of JSON file containing the 20 objects of Person
  private _url: string = "/assets/data/person.json";

  constructor(private http: HttpClient) { }

  // http get request and receive the observable
  getPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this._url);
  }

}
