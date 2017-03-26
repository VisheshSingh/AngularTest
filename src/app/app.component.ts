import { Component } from '@angular/core';
import {MyComponent} from './mycomp.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <mycomp></mycomp>`,
//  directives: [MyComponent]
})
export class AppComponent  { name = 'Angular'; }
