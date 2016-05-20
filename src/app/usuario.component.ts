import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {NavSupComponent} from './nav-sup.component';
@Component({
    templateUrl: 'app/usuario.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class UsuarioComponent {

}
