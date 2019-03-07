import { Post } from '../shared/post.model';
import { PostServico } from './post.service';
import { Component, OnInit, Pipe } from '@angular/core';



@Component({
  selector: 'app-post-wall',
  templateUrl: './post-wall.component.html',
  styleUrls: ['./post-wall.component.css'],
  providers: [ PostServico ]
})
export class PostWallComponent implements OnInit {
  
  public posts: Post[]

  constructor( private postServico: PostServico) { }

  ngOnInit() {
    this.postServico.getPost()
    .then((posts: Array<Post>) => {
      this.posts = posts
    })
  }
  

}
