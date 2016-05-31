import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';
/*import {PedidoService} from './services/pedido.service';*/
@Component({
    selector: 'nav-sup',
    template:`
        <div class="nav col-md-12 col-xs-12 navbar-default banner-fijo">
            <div class="col-md-2 col-xs-2">
                <strong>URJCComponentes</strong>
            </div>
            <div class="col-md-6 col-xs-8 ">
              <div class="col-md-12 col-xs-12" >
                <a [routerLink]="['Carrito']" ><span>{{HayPedidos}}</span></a>
                <a   *ngIf="esUsuario">
                <div class="btn-group">
                  <button type="button" class="btn dropdown-toggle"
                          data-toggle="dropdown">{{usuario}}
                    <span class="caret"></span>
                    <span class="sr-only">{{usuario}}</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a [routerLink]="['Usuarioinfo']">Informacion</a></li>
                    <li><a (click)="desloguear()" role="button">Salir</a></li>
                  </ul>
                </div>
                </a>
            </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class NavSupComponent {
  usuario:string;
  constructor(private ath0:UsuarioService,/*private service:PedidoService,*/private router:Router) {
      this.usuario=this.ath0.user.name
  }

  get HayPedidos():string{
    /*if(this.service.pedido.pedidos.length>0){*/
      return 'Tienes Productos en el carrito';

  }
  get esUsuario():boolean{
    if(this.ath0.isLogged){
      return true;
    }
    return false;
  }

  desloguear(){
      this.ath0.logOut();
      this.router.navigate(['Registro']);
  }
}
