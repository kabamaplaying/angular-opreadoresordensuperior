import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, concatMap, mergeMap,switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private urlPost = 'https://jsonplaceholder.typicode.com/posts/';
  private urlUser = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private cliente: HttpClient) {

  }

  listaPost() {
    return of(1, 2).pipe(
      map(id => {
        return this.cliente.get<Post>(`${this.urlPost}/${id}`);
      })
    );
  }

  listaPost2: Post[] = [];
  listaUsuario: User[] = [];

  post: Post;
  listaDeUsuariosConcatMap(): Observable<User> {
    const postId = 1;
    return of(1,2).pipe(
      concatMap(userId  => {
        return this.cliente.get<User>(`${this.urlUser}${userId}`).pipe(
          map(e => e as User)
        )
      })
    )
  }

  listaUsuariosMergeMap() {
    const postId = 1;
    return of(1,2).pipe(

      mergeMap(userId => {
        return this.cliente.get<User>(`${this.urlUser}${userId}`).pipe(
          map(e => e as User)
        )
      })
    ).subscribe(e => console.log(e as User));
  }

    listaUsuariosSwitchMap() {
    return of(1,2).pipe(
      switchMap(userId => {
        return this.cliente.get<User>(`${this.urlUser}${userId}`).pipe(
          map(e => e as User)
        )
      })
    )
  }
}