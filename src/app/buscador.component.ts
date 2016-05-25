import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto, ProductoService}   from './services/producto.service';
import {PedidoService} from './services/pedido.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    selector: 'buscadorinfo',
    templateUrl: 'app/buscador.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class BuscadorComponent {
  producto : Array<Producto>;
  nombre:string;

  constructor(routeParams: RouteParams, private service: ProductoService,private servicepd: PedidoService) {
        this.nombre = routeParams.get('nombre');
        service.getByBuscador(this.nombre).subscribe(
        producto => this.producto = producto,
        error => console.log(error)
    );
  }
  save(producto:Producto){
    this.servicepd.setaddPedido(producto,1);
  }

  search(nombreprod: string){
    this.producto = this.service.getByBuscador(nombreprod);
  }
}
