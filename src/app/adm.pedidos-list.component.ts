import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Usuario,UsuarioService} from './services/usuario.service';
import {PedidoProducto,PedidoService} from './services/pedido.service';

@Component({
    template: `

            <div id="users">
                <h3>Pedidos</h3>
                <br>
                <div class="panel-group">
                  <div *ngFor="#usuario of usuarios">
                    <div class="panel panel-primary">
                        <div class="panel-heading">{{usuario.userName}}</div>
                        <div *ngFor="#ped of usuario.Comprados" class="panel-body">
                            <div *ngFor="#prod of ped">
                            <p>{{prod.Producto.Nombre}}</p>
                            <p>{{prod.Producto.Num}}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdmPedidosListComponent implements OnInit {

  usuarios:Usuario[];
  pedidos:Array<Array<PedidoProducto>>;
  
  constructor(private router:Router,private serviceUser:UsuarioService){
    this.serviceUser.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
    for(let us of this.usuarios)
     this.pedidos=us.Comprados;

     }

}