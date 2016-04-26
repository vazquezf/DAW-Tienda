import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Producto,ProductoService} from './services/producto.service';
@Component({
    templateUrl: 'app/administracion.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AdministracionComponent {

  productos: Producto[];

    constructor(private router:Router, private service: ProductoService) {}

    ngOnInit(){
      this.service.Productos.subscribe(
        productos => this.productos = productos,
        error => console.log(error)
      );
    }
}
