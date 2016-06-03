import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto,ProductoService} from './services/producto.service';
import {NavSupComponent} from './nav-sup.component';
import {UsuarioService,Usuario} from './services/usuario.service';

@Component({
    templateUrl: 'app/cuerpo-index.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class CuerpoComponent implements OnInit{
    products: Producto[];
    producto:Producto;
  constructor( private service: ProductoService,private auth0:UsuarioService) {
  }

  ngOnInit(){
      this.service.getProductos().subscribe(
        products => this.products = products,
        error => console.log(error)
        );
    }

  save(producto:Producto){
    producto.cantidad = 1;
  }
  deshabilitar(pr:Producto):boolean{
    if(pr.stock>0){
      return false;
    }else{
      return true;
    }
  }

}
