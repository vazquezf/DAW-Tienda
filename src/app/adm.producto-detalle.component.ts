import {Component}  from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Producto,ProductoService}   from './services/producto.service';

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
                                <div class="panel panel-default">
                                      <div class="panel-body">
                                          <h3>{{producto.Nombre}}</h3>
                                          <p>{{producto.DescripcionC}}</p>
                                          <p>Precio: {{producto.Precio}}</p>
                                          <p>{{producto.DescripcionL}}</p>
                                          <p>Cantidad: {{producto.Stock}}</p>
                                          <button (click)="editProducto()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-pencil fa-fw"></i> Modificar articulo</button>
                                          <button (click)="removeProducto()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-trash fa-fw"></i> Eliminar articulo</button>
                                          <button (click)="gotoProductos()" class="btn btn-default" type="button" id="botonAdmin"> Todos los articulos</button>
                                      </div>
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
            this.service.removeProducto(this.producto).subscribe(
                _ => this.router.navigate(['AdmProductos']),
                error => console.error(error)
            )
        }
    }

    editProducto() {
        this.router.navigate(['AdmEditarProducto', { id: this.producto.Id }]);
    }

    gotoProductos() {
        this.router.navigate(['AdmProductos']);
    }
}
