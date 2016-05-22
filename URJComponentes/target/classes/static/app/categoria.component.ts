import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto, ProductoService}   from './services/producto.service';
import {PedidoService} from './services/pedido.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    selector: 'categoriainfo',
    templateUrl: 'app/categoria.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class CategoriaComponent {
  producto : Array<Producto>;
  categoria:string;

  constructor(routeParams: RouteParams, private service: ProductoService,private servicepd: PedidoService) {
        this.categoria = routeParams.get('categoria');
        service.getByTipo(this.categoria).subscribe(
        producto => this.producto = producto,
        error => console.log(error)
    );
}
save(producto:Producto){
  this.servicepd.setaddPedido(producto,1);
}
}
