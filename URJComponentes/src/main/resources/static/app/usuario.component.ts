import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {NavSupComponent} from './nav-sup.component';
import {Usuario,UsuarioService} from './services/usuario.service';
import {PedidoProducto,PedidoService} from './services/pedido.service';
@Component({
    templateUrl: 'app/usuario.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class UsuarioComponent {
  usuario:Usuario;
  pedidos:Array<Array<PedidoProducto>>;
  constructor(private serviceUser:UsuarioService){
    this.serviceUser.usuarioReg.subscribe(
      Usuario => this.usuario = Usuario
    );
     this.pedidos=this.usuario.Comprados;
     for(let pedido of this.pedidos){
       window.confirm(String(pedido.length));
     }

     }

  }
}
