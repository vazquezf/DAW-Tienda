import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Usuario,UsuarioService}   from './services/usuario.service';

@Component({
    template: `

            <div id="users">
                <h3>Usuarios</h3>
                <br>
                <div class="panel-group">
                  <div *ngFor="#usuario of usuarios">
                    <div *ngIf=esAdmin(usuario) class="panel panel-primary">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div class="panel-body">
                            <p>Nombre: {{usuario.name}}</p>
                            <p>Apellidos: {{usuario.primerApellido}} {{usuario.segundoApellido}}</p>
                            <p>Usuario: {{usuario.userName}}</p>
                            <p>Administrador: {{admin}}</p>
                        </div>
                    </div>
                    <br>
                    <div *ngIf=!esAdmin(usuario) class="panel panel-info">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div class="panel-body">
                            <p>Nombre: {{usuario.name}}</p>
                            <p>Apellidos: {{usuario.primerApellido}} {{usuario.segundoApellido}}</p>
                            <p>Usuario: {{usuario.userName}}</p>
                            <p>Administrador: {{admin}}</p>
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
  admin: boolean;
    constructor(private router:Router, private service: UsuarioService) {
      this.service.getUsers().subscribe(
        usuarios => this.usuarios = usuarios,
        error => console.log(error));
    }
    esAdmin(user:Usuario){
    this.admin=user.roles.indexOf("ROLE_ADMIN") !== -1;
    return
 }

    }
