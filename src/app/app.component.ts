import { Component } from '@angular/core';
import {MyComponent} from './mycomp.component';
import { PostsComponent } from './posts.component';
import {PostService} from './post.service'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <mycomp></mycomp>
            <posts></posts>`
})
export class AppComponent  { name = 'Angular'; }
