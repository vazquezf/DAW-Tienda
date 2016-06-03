import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {NavSupComponent} from './nav-sup.component';
import {Usuario,UsuarioService} from './services/usuario.service';
/*import {PedidoProducto,PedidoService} from './services/pedido.service';*/
@Component({
    templateUrl: 'app/usuario.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class UsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor(private router:Router,private serviceUser:UsuarioService){
    this.usuario = this.serviceUser.user ;
  }
      ngOnInit(){
        if(!this.serviceUser.isLogged){
          this.router.navigate(['Registro']);
      }
    }
  }
