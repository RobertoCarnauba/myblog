import { Post } from './../shared/post.model';
import { PostServico } from './../post-wall/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-postread',
  templateUrl: './postread.component.html',
  styleUrls: ['./postread.component.css'],
  providers: [ PostServico ]
})
export class PostreadComponent implements OnInit {

  constructor( private postServico: PostServico) { }
  private posts:  Post[]
  ngOnInit() {
    this.postServico.getOfertaPorCategoria('id')
    .then((posts: Post[]) =>{
      this.posts = posts
      console.log(posts)
    })
  }

  ngOnDestroy(){
    this.postServico.getPost()
  }

}
