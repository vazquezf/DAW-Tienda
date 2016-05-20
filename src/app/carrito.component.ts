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
      this.CargarPedidos();
      this.auth0.usuarioReg.subscribe(
        Usuario => this.usuario = Usuario,
        error => console.log(error));
        window.confirm(String(this.usuario.Nombre));
    }
    guardarPedido(){
      if(this.usuario.TipoUsuario=='usuario' && this.pedidos.length>0){
        this.auth0.addPedido(this.pedidos);
        this.service.DelPedido;
        this.CargarPedidos();
      }
    }

    CargarPedidos(){
      this.service.Pedidos.subscribe(
        Productos => this.pedidos = Productos,
        error => console.log(error));
    }
}
