import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';
import {CarritoService} from './carrito.service';
@Component({
    templateUrl: 'app/carrito.component.html',
    directives: [ROUTER_DIRECTIVES];
})

export class CarritoComponent {
    
    carrito: Producto[]=[];
    constructor( carrito: CarritoService){
      this.carrito = carrito.getCarrito();
      }
}
