import { PostServico } from './../post-wall/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';



@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  providers: [ PostServico ]
})
export class AdminListComponent implements OnInit {

  public posts: Post[]

  constructor( private postServico: PostServico) { }

  ngOnInit() {
    this.postServico.getPost()
    .then((posts: Array<Post>) => {
      this.posts = posts
    })
  }

}
