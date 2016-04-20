import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';
import {RouteParams, Router} from 'angular2/router';


@Component({
    selector: 'infoproducto',
    templateUrl: 'app/infoProd.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class InfoProdComponent {
    producto: Producto;
    
      constructor(private _router:Router, routeParams:RouteParams, service: ProductoService){
      
      let id = routeParams.get('id');
      this.producto = service.getProducto(id);
  }
}
