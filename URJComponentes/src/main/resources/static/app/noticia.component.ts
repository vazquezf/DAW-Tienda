import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService} from './services/noticia.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    templateUrl: 'app/noticia.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class NoticiaComponent implements OnInit  {

  noticias: Noticia[];

    constructor(private service: NoticiaService) {}

    ngOnInit(){
      this.service.getNoticias().subscribe(
        noticias => this.noticias = noticias,
        error => console.log(error)
      );
    }
}
