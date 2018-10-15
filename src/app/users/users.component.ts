import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { IUser } from './user'
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],

})
export class UsersComponent implements OnInit {

  numberOfUserInPage: number = 9;
  numberOfcolums: number = 3;
  users: IUser[] = [];
  numberOfRows: number;
  man = faMale;
  women = faFemale;
  colspan :number = 1;
  rowspan:number = 1;
  errorMessage: string;
  filterUsers:IUser[] = []
  _regexFilter:string ;
  constructor(private usersService: UserService) { }
  get regexFilter(): string {
    return this._regexFilter;
}
set listFilter(value: string) {
    this._regexFilter = value;
    this.filterUsers = this.regexFilter ? this.performFilter(this.regexFilter) : this.users;
}
performFilter(filterBy: string): IUser[] {
  filterBy = filterBy.toLocaleLowerCase();
  //return this.users.filter((user: IUser) =>
        return this.users; 
}
transferRegex(filter:string){
  debugger;
  this._regexFilter = filter;
  console.log("list got:"+this._regexFilter);
}
  ngOnInit() {
    debugger;
    this.usersService.getUsers(this.numberOfUserInPage)
      .subscribe(users => {
        this.users = users;
        this.filterUsers = users;
      }, error => this.errorMessage = <any>error);
  }
  Load() {
    debugger
    this.usersService.getUsers(this.numberOfUserInPage)
      .subscribe(users => {

        if (this.users.length === 0) {
          debugger;
          this.users = users;
        }
        else {
          debugger;
          this.users = this.users.concat(users);
        }
      },
        error => this.errorMessage = <any>error);
    console.log(this.users);
  }
}


