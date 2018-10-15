import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule,  MatCardModule,MatFormFieldModule,
        MatInputModule,MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpModule } from '@angular/http';
import { searchInput } from './search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterRegexPipPipe } from './users/filter-regex-pip.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    searchInput,
    FilterRegexPipPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FontAwesomeModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
