import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';
import {PedidoService} from './services/pedido.service';

@Component({
    selector: 'cabecera-app',
    templateUrl: 'app/header.html',
    directives: [ROUTER_DIRECTIVES]
})


export class HeaderComponent {
  constructor(private router : Router,private service : UsuarioService, private servicepd:PedidoService){}

  get estaRegistrado():string{
    if(this.service.usuario.TipoUsuario=='Anonimo'){
      return'Registro';
    }else{
      return 'Usuarioinfo';
    }
  }

  get loguear():boolean{
    return (this.service.usuario.TipoUsuario=='Anonimo');
  }

  search(nombre: string) {
    this.router.navigate(['Buscador', {nombre: nombre}]);
  }
  get cantidad(){
    return (this.servicepd.pedido.pedidos.length>0) ? 'fa-cart-arrow-down' : 'fa-shopping-cart';
  }

}
