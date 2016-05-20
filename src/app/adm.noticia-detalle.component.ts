import {Component}  from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Noticia,NoticiaService}   from './services/noticia.service';

@Component({
    template: `
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
                                <div class="panel panel-default">
                                      <div class="panel-body">
                                          <h3>{{noticia.titulo}}</h3>
                                          <p>{{noticia.imagen}}</p>
                                          <p>{{noticia.descripcion}}</p>
                                          <button (click)="editNoticia()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-pencil fa-fw"></i> Modificar noticia</button>
                                          <button (click)="removeNoticia()" class="btn btn-default" type="button" id="botonAdmin"><i class="fa fa-trash fa-fw"></i> Eliminar noticia</button>
                                          <button (click)="gotoNoticias()" class="btn btn-default" type="button" id="botonAdmin"> Todos las noticias</button>
                                      </div>
                              </div>
                          </div>
                      </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AdmNoticiaDetalleComponent {

    noticia: Noticia;

    constructor(private router: Router, routeParams: RouteParams, private service: NoticiaService) {
        let id = routeParams.get('id');
        service.getNoticia(id).subscribe(
            noticia => this.noticia = noticia,
            error => console.error(error)
        );
    }

    removeNoticia() {
        let okResponse = window.confirm("¿Quieres borrar esta noticia?");
        if (okResponse) {
            this.service.removeNoticia(this.noticia).subscribe(
                _ => this.router.navigate(['AdmNoticias']),
                error => console.error(error)
            )
        }
    }

    editNoticia() {
        this.router.navigate(['AdmEditarNoticia', { id: this.noticia.id }]);
    }

    gotoNoticias() {
        this.router.navigate(['AdmNoticias']);
    }
}
