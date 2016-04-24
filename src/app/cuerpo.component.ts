import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';
import {CarritoService} from './carrito.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/cuerpo.component.html',
})

export class CuerpoComponent {
  productos: Producto[];

    constructor(private router:Router, private service: ProductoService) {}

    ngOnInit(){
      this.service.getProductos().subscribe(
        productos => this.productos = productos,
        error => console.log(error)
      );
    }

}
