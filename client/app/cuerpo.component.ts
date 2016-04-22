import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';
import {CarritoService} from './carrito.service';

@Component({
    directives: [ROUTER_DIRECTIVES]
    templateUrl: 'app/cuerpo.component.html',
})

export class CuerpoComponent {
  private productos: Producto[]=[];

  constructor(productosService: ProductoService) {
      this.productos = productosService.getProductos();
      
  }

}
