import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComponent}  from './mycomp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FilterPipe} from './filter.pipe';
import { PostsComponent } from './posts.component';
import {PostService} from './post.service'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, MyComponent, PostsComponent, FilterPipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ PostService ]
})
export class AppModule { }
