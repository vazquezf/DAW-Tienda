import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';
import {PedidoService} from './services/pedido.service';
@Component({
    selector: 'nav-sup',
    template:`
        <div class="nav col-md-12 col-xs-12 navbar-default banner-fijo">
            <div class="col-md-2 col-xs-2">
                <strong>URJCComponentes</strong>
            </div>
            <div class="col-md-6 col-xs-8 ">
                <a [routerLink]="['Usuarioinfo']" ><span >{{usuario.Nombre}}</span></a>
                <a><span>{{HayPedidos}}</span></a>
                <a><span></span></a><a><span></span></a>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class NavSupComponent {
  usuario:Usuario;
  constructor(private ath0:UsuarioService,private service:PedidoService) {
      this.ath0.usuarioReg.subscribe(
        Usuario => this.usuario = Usuario,
        error => console.log(error));

  }

  get HayPedidos():string{
    if(this.service.pedido.pedidos.length>0){
      return 'Tienes Productos en el carrito';
    }
  }

}
