import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Usuario,UsuarioService} from './services/usuario.service';
import {Pedido} from './services/pedido.service';

@Component({
    template: `

            <div id="users">
                <h3>Pedidos</h3>
                <br>
                <div class="panel-group">
                  <div *ngFor="#usuario of usuarios">
                    <div class="panel panel-info">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div *ngFor="#pedido of usuario.pedidos" class="panel-body">
                          <ol>
                            <li>Pedido</li>
                            <ul>
                            <div *ngFor="#prod of pedido.productos">
                              <li>{{prod.cantidad}} x <img class="CarritoJPG" src="{{prod.img_ruta}}">{{prod.nombre}}</li>
                            </div>
                            </ul>
                          </ol>
                        </div>
                    </div>
                    <p></p>
                  </div>
                </div>
            </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdmPedidosListComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private router:Router,private serviceUser:UsuarioService){
    this.serviceUser.getUsers().subscribe(
        usuarios => this.usuarios = usuarios,
        error => console.log(error));
     }
 IsUser(user : Usuario){
    return user.roles.indexOf("ROLE_ADMIN") !== -1;
 }
}
