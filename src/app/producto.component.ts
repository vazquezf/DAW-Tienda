import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router,RouteParams} from 'angular2/router';
import {MenuIzqComponent} from './menu-izq.component';
import {CategoriaComponent} from './categoria.component';
import {Producto,ProductoService}   from './services/producto.service';
import {PedidoService} from './services/pedido.service';
@Component({
  template: `
  <div class="container ">
      <arbolcategorias class="col-md-2"></arbolcategorias>
      <categoriainfo class="ruta-navegacion col-md-10"></categoriainfo>
  </div>
`,
    directives: [ROUTER_DIRECTIVES,MenuIzqComponent,CategoriaComponent]
})

export class ProductoComponent {

}
