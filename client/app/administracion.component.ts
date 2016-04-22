import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';
@Component({
    templateUrl: 'app/administracion.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AdministracionComponent {
     
     productos: Producto[];
     
     constructor(service: ProductoService) {
        this.productos = service.getProductos();
      }
     
     nuevoProducto(id: number, titulo: string){
        service.añadirProducto(id,titulo);
     }
}

