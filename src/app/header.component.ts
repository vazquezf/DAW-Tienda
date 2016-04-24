import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'cabecera-app',
    templateUrl: 'app/header.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}
