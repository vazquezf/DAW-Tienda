import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Producto,ProductoService}   from './services/producto.service';

import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';
@Component({
    template: `
    <div class="container">
        <div class="col-md-3 col-sm-3 col-lg-3">
            <ul class="nav nav-pills nav-stacked">
              <li role="presentation" class="active" id="menu"><a>Menu</a></li>
              <li role="presentation"><a [routerLink]="['AdmUsuarios']" id="aUsers">Usuarios</a></li>
              <li role="presentation"><a [routerLink]="['AdmProductos']" id="aProducts">Productos</a></li>
              <li role="presentation"><a href="#orders" id="aOrders">Pedidos</a></li>
              <li role="presentation"><a [routerLink]="['AdmNoticias']" id="aNews">Noticias</a></li>
              <li role="presentation"><a href="/">Volver a la pagina principal</a></li>
          </ul>
        </div>

        <div class="col-md-9 col-sm-9 col-lg-9" id="inicio">
            <div id="head">
                <h2>Administración</h2>
            </div>

            <div id="products">
                <h3>Productos</h3>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#existingProducts">Productos existentes</a></li>
                    <li><a [routerLink]="['AdmNuevoProducto']" data-toggle="tab">Añadir producto</a></li>
                </ul>

                <div class="tab-content">
                    <div id="existingProducts" class="tab-pane fade in active">
                        <br>
                        <div class="panel-group">
                          <div *ngFor="#producto of productos">
                              <div class="panel panel-default">
                                    <div class="panel-body">
                                        <a [routerLink]="['AdmProductoDetalle', {id: producto.Id}]">{{producto.Nombre}}</a>
                                        <p>Precio: {{producto.Precio}}</p>
                                        <p>Cantidad: {{producto.Stock}}</p>
                                    </div>
                                </div>
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
      this.service.Productos.subscribe(
        productos => this.productos = productos,
        error => console.log(error)
      );
    }

    newProducto() {
      this.router.navigate(['AdmNuevoProducto']);
    }


}
