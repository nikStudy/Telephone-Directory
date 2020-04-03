import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

// create header parameter for http call to the json server
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // declare and assign variable to store the address of JSON file from the JSON server
  private _url: string = "http://localhost:3000/Person";
  
  constructor(private http: HttpClient) { }

  // http get request and receive the observable
  getPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this._url, headerOption);
  }

  // http put (update) request and receive the observable
  putPerson(id: number, str: string): Observable<Person>{
    return this.http.put<Person>(this._url + '/' + id, str, headerOption);
  }

}
