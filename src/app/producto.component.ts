import {Component} from 'angular2/core';
import {MenuIzqComponent} from './menu-izq.component';
import {InfoProdComponent} from './infoProd.component';

@Component({

    template: `
    <div class="container ">
        <arbolcategorias class="col-md-2"></arbolcategorias>
        <infoproducto class="ruta-navegacion col-md-10"></infoproducto>
    </div>
  `,
    directives: [MenuIzqComponent,InfoProdComponent],
})

export class ProductoComponent {

}
