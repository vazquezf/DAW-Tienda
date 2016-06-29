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
      this.isLogged = this.auth0.isLogged;
    }
    ngOnInit(){
      this.pedido=  this.auth0.user.pedidos[this.auth0.user.pedidos.length-1].productos
      }
  /*  get pedido():Producto[]{
    	return ( this.auth0.user.pedidos[this.auth0.user.pedidos.length-1].productos);
    }*/
    guardarPedido(){
      this.auth0.hacerPedido().subscribe(
        user=>this.pedido=null,
        error => console.log(error)
      );
    }

    BorrarPedidos(){
    this.auth0.borrarPedido().subscribe(
        user=>this.pedido=null,
        error => console.log(error)
      );
    }

    eliminar(index){
      this.auth0.borrarUna(index).subscribe(
        user=>this.pedido=user.pedidos[this.usuario.pedidos.length-1].productos,
        error => console.log(error)
      );

    }

}
