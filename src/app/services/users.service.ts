import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');


  //  return [
  //     {id: 101, name: 'John', city: 'Delhi', salary: 20, dob: new Date('05/10/1989')},
  //     {id: 101, name: 'Smith', city: 'Delhi', salary: 20, dob: new Date('05/10/1989')},
  //     {id: 101, name: 'jenn', city: 'Delhi', salary: 20, dob: new Date('05/10/1989')},
  //     {id: 101, name: 'jolly', city: 'Delhi', salary: 20, dob: new Date('05/10/1989')}
  //   ];
  }

}

interface Sidebar {
  _id: string;
  content: string;
}
