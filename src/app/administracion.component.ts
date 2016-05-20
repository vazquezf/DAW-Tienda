import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Producto,ProductoService} from './services/producto.service';


@Component({
    selector: 'menuAdmin',
    templateUrl: 'app/administracion.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AdministracionComponent {


}
