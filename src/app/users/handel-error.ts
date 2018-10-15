import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{Response} from '@angular/http'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
export class handleError {
    static handleError(error: Response): Observable<any> {
        console.error('handleError'+error);
        return Observable.throw(error.json() || 'Server error');
    }
}