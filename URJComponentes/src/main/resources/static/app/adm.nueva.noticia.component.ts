import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Noticia,NoticiaService}   from './services/noticia.service';

@Component({
    template: `

            <div id="news">
                <h3>Noticias</h3>
                <ul class="nav nav-tabs">
                    <li><a data-toggle="tab" [routerLink]="['AdmNoticias']">Noticias existentes</a></li>
                    <li class="active"><a data-toggle="tab" href="#addnews">Añadir noticia</a></li>
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
                                <button (click)="guardar()" class="btn btn-default" name="enviar" value="Enviar" id="botonAdmin"><i class="fa fa-floppy-o fa-fw"></i> Guardar</button>

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
          this.noticia = {titulo:'',imagen:'',descripcion:''};
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
