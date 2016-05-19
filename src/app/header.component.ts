import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UsuarioService} from './services/usuario.service';

@Component({
    selector: 'cabecera-app',
    templateUrl: 'app/header.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent  {
  nombre:string;
  apellido:string;
  constructor(private servieuser:UsuarioService){}
}
