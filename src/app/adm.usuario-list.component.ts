import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Usuario,UsuarioService}   from './services/usuario.service';

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

            <div id="users">
                <h3>Usuarios</h3>
                <br>
                <div class="panel-group">
                  <div *ngFor="#usuario of usuarios">
                    <div *ngIf="usuario.admin" class="panel panel-primary">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div class="panel-body">
                            <p>Nombre: {{usuario.nombre}}</p>
                            <p>Apellidos: {{usuario.primerApellido}} {{usuario.segundoApellido}}</p>
                            <p>Usuario: {{usuario.userName}}</p>
                            <p>Administrador: {{usuario.admin}}</p>
                        </div>
                    </div>
                    <div *ngIf="!usuario.admin" class="panel panel-info">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div class="panel-body">
                            <p>Nombre: {{usuario.nombre}}</p>
                            <p>Apellidos: {{usuario.primerApellido}} {{usuario.segundoApellido}}</p>
                            <p>Usuario: {{usuario.userName}}</p>
                            <p>Administrador: {{usuario.admin}}</p>
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

export class AdmUsuarioListComponent implements OnInit {

  usuarios: Usuario[];

    constructor(private router:Router, private service: UsuarioService) {}

    ngOnInit(){
      this.service.getUsuarios().subscribe(
        usuarios => this.usuarios = usuarios,
        error => console.log(error)
      );
    }

}
