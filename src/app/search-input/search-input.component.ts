import { Component, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { searchValidate } from './searchValidators';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class searchInput  {

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  regexInput: string;
  searchFormControl = new FormControl('',[ 
    searchValidate
  ]);
 
  matcher = new MyErrorStateMatcher();
  constructor() {
    this.searchFormControl.valueChanges
      .subscribe(
        x => { 
          
          if(this.searchFormControl.valid)
            {
              //update regexInput member
              this.regexInput = this.searchFormControl.value;
              console.log(this.regexInput); 
            }
        
      }
      )
  }
  RegexChanged():void { 
    //emitt regexInput
    debugger;
    this.valueChange.emit(this.regexInput);
  }
}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */