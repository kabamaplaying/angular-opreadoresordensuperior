import { Component, OnInit } from '@angular/core';
import {PostService } from './services/post-services';
import { User } from '../models/user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.listaPost().subscribe(console.log);
    this.service.listaDeUsuarios().subscribe(e => console.log('concatMap =>>', e as User))
    this.service.listaUsuariosMergeMap();
    this.service.listaUsuariosswitchMap().subscribe(e => console.log(e as User));
  }
}
