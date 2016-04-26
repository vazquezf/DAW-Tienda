import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia,NoticiaService}   from './services/noticia.service';

import {AdmNuevaNoticiaComponent} from './adm.nueva.noticia.component';
import {AdmNoticiaDetalleComponent} from './adm.noticia-detalle.component';
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
                    <li class="active"><a data-toggle="tab" href="#existingNews">Noticias existentes</a></li>
                    <li><a [routerLink]="['AdmNuevaNoticia']" data-toggle="tab">Añadir noticia</a></li>
                </ul>

                <div class="tab-content">
                    <div id="existingNews" class="tab-pane fade in active">
                        <br>
                        <div class="panel-group">
                            <div *ngFor="#noticia of noticias">
                              <div class="panel panel-default">
                                    <div class="panel-body">
                                        <a [routerLink]="['AdmNoticiaDetalle', {id: noticia.id}]">{{noticia.titulo}}</a>
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

export class AdmNoticiaListComponent implements OnInit {

  noticias: Noticia[];

    constructor(private router:Router, private service: NoticiaService) {}

    ngOnInit(){
      this.service.getNoticias().subscribe(
        noticias => this.noticias = noticias,
        error => console.log(error)
      );
    }

    newNoticia() {
      this.router.navigate(['AdmNuevaNoticia']);
    }


}
