import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto,ProductoService} from './services/producto.service';
import {Pedido,PedidoService} from './services/pedido.service';
import {NavSupComponent} from './nav-sup.component';

@Component({
    templateUrl: 'app/cuerpo-index.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent],
})

export class CuerpoComponent implements OnInit{

  Productos: Producto[]= [];
  producto:Producto;

  constructor(private service: ProductoService,private servicepd: PedidoService) {
  }

  ngOnInit(){
    this.service.getProductos().subscribe(
      Productos => this.Productos = Productos,
      error => console.log(error)
    );
  }

  save(producto:Producto){
    this.servicepd.setaddPedido(producto,1);
  }


}
