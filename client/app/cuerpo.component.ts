import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';

@Component({
    directives: [ROUTER_DIRECTIVES]
    templateUrl: 'app/cuerpo.component.html',
    
})

export class CuerpoComponent {
  productos: Producto[];

  constructor(service: ProductoService) {
      this.productos = service.getProductos();
  }
}
