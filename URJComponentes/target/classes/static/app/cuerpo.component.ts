import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto,ProductoService} from './services/producto.service';
import {NavSupComponent} from './nav-sup.component';
import {UsuarioService,Usuario} from './services/usuario.service';
import 'rxjs/Rx';
@Component({
    templateUrl: 'app/cuerpo-index.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class CuerpoComponent implements OnInit{
    products: Producto[];
    producto:Producto;
    isLogged:boolean;
  constructor( private service: ProductoService,private auth0:UsuarioService) {
    this.isLogged = this.auth0.isLogged;
  }

  ngOnInit(){
      this.service.getProductos().subscribe(
        products => this.products = products,
        error => console.log(error)
        );
    }

  save(producto:Producto){
    producto.cantidad = 1;
    this.auth0.pedir(producto).subscribe(
      product=>this.auth0.refresh(product),
      error => console.log(error)
    );
  }
  deshabilitar(pr:Producto):boolean{
    if(pr.stock>0&&this.isLogged){
      return false;
    }else{
      return true;
    }
  }

}
