import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService} from './producto.service';

@Component({
    template: `
    <div class="container">
        <div class="col-md-3 col-sm-3 col-lg-3">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation" class="active" id="menu"><a>Menu</a></li>
                <li role="presentation"><a href="#users" id="aUsers">Usuarios</a></li>
                <li role="presentation"><a [routerLink]="['AdmProductos']" id="aProducts">Productos</a></li>
                <li role="presentation"><a href="#orders" id="aOrders">Pedidos</a></li>
                <li role="presentation"><a href="#news" id="aNews">Noticias</a></li>
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
                    <li><a data-toggle="tab" [routerLink]="['AdmProductos']">Productos existentes</a></li>
                    <li class="active"><a data-toggle="tab" href="#addproduct">Añadir producto</a></li>
                </ul>
                <div class="tab-content">
                    <div id="addproduct" class="tab-pane fade  in active">
                        <h3>Nuevo producto</h3>
                        <br>
                        <div id="formAddProducto">

                                <p>
                                    <label>Nombre del producto:</label>
                                    <input [(ngModel)]="producto.titulo" type="text" name="name" required="required">
                                </p>
                                <div *ngIf="producto.id">
                                    <label>Id: </label>{{producto.id}}</div>
                                <div>
                                <label>Descripción breve:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.shortDescrip" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Imagen:</label>
                                    <input [(ngModel)]="producto.img" type="text" name="img" required="required">
                                </p>
                                <p>
                                    <label>Precio:</label>
                                    <input [(ngModel)]="producto.precio" type="number" name="price" required="required">
                                </p>
                                <label>Descripción:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.longDescrip" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Cantidad:</label>
                                    <input type="number" name="quantity">
                                </p>
                                <p>
                                    <label>Categoria:</label>
                                    <select>
                                        <option value="componentes">Componentes</option>
                                        <option value="perifericos">Perifericos</option>
                                        <option value="smartphone">Smartphone</option>
                                        <option value="portatiles">Portatiles</option>
                                    </select>
                                </p>
                                <button (click)="cancelar()" class="btn btn-default" name="cancelar" value="Cancelar" id="botonAdmin">Cancelar</button>
                                <button (click)="guardar()" class="btn btn-default" name="enviar" value="Enviar" id="botonAdmin">Enviar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdmNuevoProductoComponent {

  newProducto: boolean;
    producto: Producto;

    constructor(
      private _router:Router,
      routeParams:RouteParams,
      private service: ProductoService){

        let id = routeParams.get('id');
        if(id){
          service.getProducto(id).subscribe(
            producto => this.producto = producto,
            error => console.error(error)
          );
          this.newProducto = false;
        } else {
          this.producto = new Producto(undefined,'','','',undefined,'');
          this.newProducto = true;
        }
    }

    cancelar() {
      window.history.back();
    }

    guardar() {
      this.service.saveProducto(this.producto);
      window.history.back();
    }

}
