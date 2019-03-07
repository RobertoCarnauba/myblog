import { HttpClient } from '@angular/common/http';
import { Post } from '../shared/post.model';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

import { Injectable } from '@angular/core';

@Pipe({
    name: 'striphtml'
})


@Injectable()
export class PostServico {

	constructor(private http: HttpClient) { }

	public getPost(): Promise <Post[]> {
		//retorna todos os posts
        return this.http.get<Post[]>('http://localhost:3000/posts')
            .toPromise()
			.then((resposta: any) => resposta)
	}
}
