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
	private url = 'http://localhost:3000/posts';
	constructor(private http: HttpClient) { }

	public getPost(): Promise <Post[]> {
		//retorna todos os posts
        return this.http.get<Post[]>('http://localhost:3000/posts')
            .toPromise()
			.then((resposta: any) => resposta)
	}
	public getOfertaPorCategoria(id: string): Promise<Post[]> {
        return this.http.get<Post[]>('http://localhost:3000/posts?id')
            .toPromise()
			.then((resposta: any) => resposta)
			console.log('resposta')

    }
}
