import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComponent}  from './mycomp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FilterPipe} from './filter.pipe';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, MyComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
