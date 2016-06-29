import {Component}  from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService}   from './services/producto.service';
import {Comentario} from './services/comentario.service';

@Component({
    template: `
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
                                <div class="panel panel-default">
                                      <div *ngIf="producto" class="panel-body">
                                          <h3>{{producto.nombre}}</h3>
                                          <p>{{producto.description_corta}}</p>
                                          <p>Precio: {{producto.precio}}</p>
                                          <p>{{producto.descripcion_larga}}</p>
                                          <p>Cantidad: {{producto.stock}}</p>
                                          <button (click)="editProducto()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-pencil fa-fw"></i> Modificar articulo</button>
                                          <button (click)="removeProducto()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-trash fa-fw"></i> Eliminar articulo</button>
                                          <button (click)="gotoProductos()" class="btn btn-default" type="button" id="botonAdmin"> Todos los articulos</button>
                                          <hr>

                                          <div *ngFor="#comentario of producto.comentarios;#i = index">
                                            <p>Usuario: {{comentario.nombreUsuario}}</p>
                                            <p>ID: {{comentario.id}}</p>
                                            <p>Opinion: {{comentario.opinion}}</p>
                                            <p>Vloracion Positiva: {{comentario.valoracionPos}}</p>
                                            <p>Valoracion Negativa: {{comentario.valoracionNeg}}</p>
                                            <p>Recomendacion: {{comentario.recomendacion}}</p>
                                            <button (click)="removeComentario(i)" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-trash fa-fw"></i> Eliminar comentario</button>
                                            <br>
                                          </div>
                                      </div>
                              </div>
                          </div>
                      </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AdmProductoDetalleComponent {

    producto: Producto;

    constructor(private router: Router, routeParams: RouteParams, private service: ProductoService) {
        let id = routeParams.get('id');
        service.getProducto(id).subscribe(
            producto => this.producto = producto,
            error => console.error(error)
        );
    }

    removeProducto() {
        let okResponse = window.confirm("¿Quieres borrar este producto?");
        if (okResponse) {
            this.service.removeProduct(this.producto).subscribe(
                _ => this.router.navigate(['AdmProductos']),
                error => console.error(error)
            )
        }
    }

    editProducto() {
        this.router.navigate(['AdmEditarProducto', { id: this.producto.id }]);
    }

    gotoProductos() {
        this.router.navigate(['AdmProductos']);
    }

    removeComentario(id: number) {
      let okResponse = window.confirm("¿Quieres borrar este comentario?");
      if (okResponse) {
          this.service.removeComentario(this.producto, id).subscribe(
              product => this.producto = product,
              error => console.error(error)
          )
      }
    }

}
