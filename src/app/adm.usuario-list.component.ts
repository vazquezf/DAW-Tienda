import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Usuario,UsuarioService}   from './services/usuario.service';

@Component({
    template: `

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
                    <br>
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
