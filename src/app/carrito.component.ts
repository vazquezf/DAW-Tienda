import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {ProductoService} from './services/producto.service';
import {PedidoProducto,PedidoService} from './services/pedido.service';
@Component({
    templateUrl: 'app/carrito.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class CarritoComponent {

  pedidos:Array<PedidoProducto>;
  constructor(private router:Router, private service: PedidoService) {
    this.service.Pedidos.subscribe(
      Productos => this.pedidos = Productos,
      error => console.log(error));
  }


}
