import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Noticia,NoticiaService}   from './services/noticia.service';

@Component({
    template: `
    <div class="container">
        <div class="col-md-3 col-sm-3 col-lg-3">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation" class="active" id="menu"><a>Menu</a></li>
                <li role="presentation"><a href="#users" id="aUsers">Usuarios</a></li>
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

            <div id="news">
                <h3>Noticias</h3>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" [routerLink]="['AdmNoticias']">Noticias existentes</a></li>
                    <li><a data-toggle="tab" href="#addnews">Añadir noticia</a></li>
                </ul>
                <div class="tab-content">
                    <div id="addnews" class="tab-pane fade in active">
                        <h3>Nueva noticia</h3>
                        <br>
                        <div id="formAddNews">

                                <p>
                                    <label>Titulo de la noticia:</label>
                                    <input [(ngModel)]="noticia.titulo" type="text" name="name" required="required">
                                </p>
                                <div *ngIf="noticia.id">
                                    <label>Id: </label>{{noticia.id}}</div>
                                <div>
                                <div class="form-group">
                                    <label>Imagen:</label>
                                    <input type="file">
                                </div>
                                <p>
                                    <label>Imagen:</label>
                                    <input [(ngModel)]="noticia.imagen" type="text" name="imagen">
                                </p>
                                <label>Descripción:</label>
                                <p>
                                    <textarea [(ngModel)]="noticia.descripcion" rows="5" cols="100" required="required"></textarea>
                                </p>

                                <button (click)="cancelar()" class="btn btn-default" name="cancelar" value="Cancelar" id="botonAdmin"><i class="fa fa-times fa-fw"></i> Cancelar</button>
                                <button (click)="guardar()" class="btn btn-default" name="enviar" value="Enviar" id="botonAdmin"><i class="fa fa-floppy-o fa-fw"></i> Enviar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdmNuevaNoticiaComponent {

  newNoticia: boolean;
    noticia: Noticia;

    constructor(
      private _router:Router,
      routeParams:RouteParams,
      private service: NoticiaService){

        let id = routeParams.get('id');
        if(id){
          service.getNoticia(id).subscribe(
            noticia => this.noticia = noticia,
            error => console.error(error)
          );
          this.newNoticia = false;
        } else {
          this.noticia = new Noticia(undefined,'','','');
          this.newNoticia = true;
        }
    }

    cancelar() {
      window.history.back();
    }

    guardar() {
      this.service.saveNoticia(this.noticia);
      window.history.back();
    }

}
