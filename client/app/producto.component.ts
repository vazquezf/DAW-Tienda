import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuIzqComponent} from './menu-izq.component';
import {InfoProdComponent} from './infoprod.component';

@Component({
    template: `
    <div class="container ">
        <arbolcategorias class="col-md-2"></arbolcategorias>
        <infoproducto class="ruta-navegacion col-md-10"></infoproducto>
    </div>
  `,
    directives: [ROUTER_DIRECTIVES,MenuIzqComponent,InfoProdComponent]
})

export class ProductoComponent {

}
