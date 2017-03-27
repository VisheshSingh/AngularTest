import {Injectable} from '@angular/core';

@Injectable()

export class PostService {
  private posts: any[];

  constructor(){
  this.posts =[{title:'Post 1',body:'Body of first post'},
              {title:'Post 2',body:'Body of second post'},
              {title:'Post 3',body:'Body of third post'},
              {title:'Post 4',body:'Body of fourth post'}];

  }

  getPosts(){
    return this.posts;
  }

}
