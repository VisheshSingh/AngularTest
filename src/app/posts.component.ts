import { Component } from '@angular/core';
import { MyComponent } from './mycomp.component';
import { PostService } from './post.service';

@Component({
  selector: 'posts',
  template: `<h1>POSTS</h1>
            <ul>
              <li *ngFor="let post of posts">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
              </li>
            </ul>
            <hr />`,
//  directives: [MyComponent]
})
export class PostsComponent  {
  private posts:any[];

  constructor(private ps: PostService){
    this.posts = ps.getPosts();
  }
}
