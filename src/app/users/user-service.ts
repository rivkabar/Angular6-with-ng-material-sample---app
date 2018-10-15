import { Injectable } from '@angular/core';
import {Http,Response} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IUser } from './user';
import  {handleError} from './handel-error';


@Injectable( )
export class UserService {

  private baseUrl = "https://randomuser.me/api/?results="
  private columsToBeInclude = "&inc=picture,name,email,gender";
  isLoading = true;
  constructor(private http:Http) { }
  getUsers( _numberOfUsers: number):Observable<IUser[]>{
    debugger
     _numberOfUsers;
    return this.http.get(this.baseUrl+_numberOfUsers+this.columsToBeInclude)
    .map(this.extractData)
    .do(data=>console.log('getUsers ' + JSON.stringify(data) ))
    .catch(handleError.handleError);
  }

  private extractData(response: Response) {
    debugger;
    let body = response.json();
    return body.results || {};
}
}
