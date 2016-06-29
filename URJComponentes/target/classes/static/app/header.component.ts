import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';
import {Pedido} from './services/pedido.service';

@Component({
    selector: 'cabecera-app',
    templateUrl: 'app/header.html',
    directives: [ROUTER_DIRECTIVES]
})


export class HeaderComponent {

  n: number;

  constructor(private router : Router,private service : UsuarioService){
  }

  get estaRegistrado():string{
    if(!this.service.isLogged){
      return 'Registro';
    }else{
      return 'Usuarioinfo';
    }
  }
  get isAdmin():boolean{
  	return (this.service.isAdmin);
  	}
  get loguear():boolean{
    return (this.service.isLogged);
  }

  search(nombre: string) {
    this.router.navigate(['Buscador', {nombre: nombre}]);
  }
get cantidad(){
    this.n =0;
    return (this.n>0) ? 'fa-cart-arrow-down' : 'fa-shopping-cart';
  }
}
