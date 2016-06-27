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
  isLogged: boolean;
  usuario:Usuario;
  constructor(private router:Router,private auth0:UsuarioService) {
      this.usuario = this.auth0.user;
      this.isLogged = this.auth0.isLogged;
      this.CargarPedidos();
    }
    guardarPedido(){
      this.auth0.hacerPedido().susbcribe(
        user=>this.usuario = user,
        error => console.log(error)
      );
      this.CargarPedidos();
    }

    BorrarPedidos(){
    }

    CargarPedidos(){

      if (this.usuario.pedidos.length > 0){
      this.pedido = this.usuario.pedidos[this.usuario.pedidos.length-1].productos;
      }
}
    eliminar(p:Pedido){

    }

}
