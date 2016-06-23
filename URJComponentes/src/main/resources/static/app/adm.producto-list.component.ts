import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Producto,ProductoService}   from './services/producto.service';

import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';
@Component({
    template: `
            <div id="products">
                <h3>Productos</h3>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#existingProducts">Productos existentes</a></li>
                    <li><a (click)="newProducto()" data-toggle="tab">Añadir producto</a></li>
                </ul>

                <div class="tab-content">
                    <div id="existingProducts" class="tab-pane fade in active">
                        <br>
                        <div class="panel-group">
                          <div *ngFor="#producto of productos">
                              <div class="panel panel-default">
                                    <div class="panel-body">
                                        <a [routerLink]="['AdmProductoDetalle', {id: producto.id}]">{{producto.nombre}}</a>
                                        <p>Precio: {{producto.precio}}</p>
                                        <p>Cantidad: {{producto.stock}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdmProductoListComponent implements OnInit {

  productos: Producto[];

    constructor(private router:Router, private service: ProductoService) {}

    ngOnInit(){
      this.service.getProductos().subscribe(
        productos => this.productos = productos,
        error => console.log(error)
      );
    }

    newProducto() {
      this.router.navigate(['AdmNuevoProducto']);
    }


}
