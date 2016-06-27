import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService}   from './services/producto.service';

@Component({
    template: `
            <div *ngIf="producto" id="products">
                <h3>Productos</h3>
                <ul class="nav nav-tabs">
                    <li><a data-toggle="tab" [routerLink]="['AdmProductos']">Productos existentes</a></li>
                    <li class="active"><a data-toggle="tab" href="#addproduct">Añadir producto</a></li>
                </ul>
                <div class="tab-content">
                    <div id="addproduct" class="tab-pane fade  in active">
                        <h3>Nuevo producto</h3>
                        <br>
                        <div id="formAddProducto" *ngIf="!newProducto">

                                <p>
                                    <label>Nombre del producto:</label>
                                    <input [(ngModel)]="producto.nombre" type="text" name="name" required="required">
                                </p>
                                <div *ngIf="producto.id">
                                    <label>Id: </label>{{producto.id}}</div>
                                <div>
                                <p>
                                    <label>Imagen:</label>
                                    <input type="file">
                                </p>
                                <p>
                                    <label>Imagen:</label>
                                    <input [(ngModel)]="producto.img_ruta" type="text" name="img" required="required">
                                </p>
                                <label>Descripción breve:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.description_corta" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Precio:</label>
                                    <input [(ngModel)]="producto.precio" type="number" name="price" required="required">
                                </p>
                                <label>Descripción:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.descripcion_larga" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Cantidad:</label>
                                    <input [(ngModel)]="producto.stock" type="number" name="quantity">
                                </p>
                                <p>
                                    <label>Categoria:</label>
                                    <select [(ngModel)]="producto.tipo">
                                        <option value="Ultrabook">Ultrabook</option>
                                        <option value="Portatil">Portatil</option>
                                        <option value="Smartphone">Smartphone</option>
                                        <option value="TabletPC">TabletPC</option>
                                    </select>
                                </p>
                                <p>
                                  <input type="checkbox" [(ngModel)]="producto.novedad"/>
                                  Novedad
                                  <input type="checkbox" [(ngModel)]="producto.destacado"/>
                                  Destacado
                                </p>

                                <button (click)="cancelar()" class="btn btn-default" name="cancelar" value="Cancelar" id="botonAdmin"><i class="fa fa-times fa-fw"></i> Cancelar</button>
                                <button (click)="guardar()" class="btn btn-default" name="enviar" value="Enviar" id="botonAdmin"><i class="fa fa-floppy-o fa-fw"></i> Guardar</button>

                        </div>
                    </div>


                        <div id="formAddProducto" *ngIf="newProducto">

                                <p>
                                    <label>Nombre del producto:</label>
                                    <input [(ngModel)]="producto.nombre" type="text" name="name" required="required">
                                </p>
                                <div *ngIf="producto.id">
                                    <label>Id: </label>{{producto.id}}</div>
                                <div>
                                <p>
                                    <label>Imagen:</label>
                                    <input type="file">
                                </p>
                                <p>
                                    <label>Imagen:</label>
                                    <input [(ngModel)]="producto.img_ruta" type="text" name="img" required="required">
                                </p>
                                <label>Descripción breve:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.descripcion_corta" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Precio:</label>
                                    <input [(ngModel)]="producto.precio" type="number" name="price" required="required">
                                </p>
                                <label>Descripción:</label>
                                <p>
                                    <textarea [(ngModel)]="producto.descripcion_larga" rows="5" cols="100" required="required"></textarea>
                                </p>
                                <p>
                                    <label>Cantidad:</label>
                                    <input [(ngModel)]="producto.stock" type="number" name="quantity">
                                </p>
                                <p>
                                    <label>Categoria:</label>
                                    <select [(ngModel)]="producto.tipo">
                                        <option value="Ultrabook">Ultrabook</option>
                                        <option value="Portatil">Portatil</option>
                                        <option value="Smartphone">Smartphone</option>
                                        <option value="TabletPC">TabletPC</option>
                                    </select>
                                </p>
                                <p>
                                  <input type="checkbox" [(ngModel)]="producto.novedad"/>
                                  Novedad
                                  <input type="checkbox" [(ngModel)]="producto.destacado"/>
                                  Destacado
                                </p>
                                <button (click)="cancelar()" class="btn btn-default" name="cancelar" value="Cancelar" id="botonAdmin"><i class="fa fa-times fa-fw"></i> Cancelar</button>
                                <button (click)="guardar()" class="btn btn-default" name="enviar" value="Enviar" id="botonAdmin"><i class="fa fa-floppy-o fa-fw"></i> Guardar</button>

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

    constructor(private _router:Router, routeParams:RouteParams, private service: ProductoService){

        let id = routeParams.get('id');
        if(id){
          service.getProducto(id).subscribe(
            producto => this.producto = producto,
            error => console.error(error)
          );
          this.newProducto = false;
        } else {
          this.producto = {nombre:"", description_corta:"",
             img_ruta:"", precio:0, stock:0,
              descripcion_larga:"", novedad:false, destacado:false,tipo:"",
              comentarios:null, cantidad:1};
          this.newProducto = true;
        }
    }

    cancelar() {
      window.history.back();
    }

    guardar() {
      this.service.saveProducto(this.producto).subscribe(
          producto=> console.log("producto"+ producto.nombre+ "guardado"),
          error => console.log(error)
      );
      window.history.back();
    }

}
