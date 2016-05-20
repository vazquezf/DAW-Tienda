import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {ProductoService} from './services/producto.service';
import {PedidoProducto,PedidoService} from './services/pedido.service';
import {UsuarioService,Usuario} from './services/usuario.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    templateUrl: 'app/carrito.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class CarritoComponent {

  pedidos:Array<PedidoProducto>;
  usuario:Usuario;
  constructor(private router:Router, private service: PedidoService,private auth0:UsuarioService) {
    this.service.Pedidos.subscribe(
      Productos => this.pedidos = Productos,
      error => console.log(error));
      this.auth0.usuarioReg.subscribe(
        Usuario => this.usuario = Usuario,
        error => console.log(error));
    }
  }
