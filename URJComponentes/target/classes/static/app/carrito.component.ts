import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {ProductoService,Producto} from './services/producto.service';
import {Pedido} from './services/pedido.service';
import {UsuarioService,Usuario} from './services/usuario.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    templateUrl: 'app/carrito.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class CarritoComponent {

  pedido: Producto[];
  usuario:Usuario;
  constructor(private router:Router,private auth0:UsuarioService) {
      this.usuario = this.auth0.user;
      this.CargarPedidos();
    }
    guardarPedido(){

    }

    BorrarPedidos(){
    }

    CargarPedidos(){
      this.pedido = this.usuario.pedidos[this.usuario.pedidos.length-1].productos;
}
    eliminar(p:Pedido){

    }

}
