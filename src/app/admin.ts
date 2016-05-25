import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Producto} from './services/producto.service';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {CuerpoComponent} from './cuerpo.component';
import {ProductoComponent} from './producto.component';
import {UsuarioComponent} from './usuario.component';
import {ProductoService} from './services/producto.service';
import {PedidoService} from './services/pedido.service';
import {InfoProdComponent} from './infoProd.component';
import {CarritoComponent} from './carrito.component';
import {Usuario} from './services/usuario.service';
import {NoticiaComponent} from './noticia.component';
import {NoticiaService} from './services/noticia.service';
import {RegistroComponent} from './registro.component';
import {UsuarioService} from './services/usuario.service';
//import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

import {AdministracionComponent} from './administracion.component';

import {AdmUsuarioListComponent} from './adm.usuario-list.component';

import {AdmProductoListComponent} from './adm.producto-list.component';
import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';

import {AdmNoticiaListComponent} from './adm.noticia-list.component';
import {AdmNuevaNoticiaComponent} from './adm.nueva.noticia.component';
import {AdmNoticiaDetalleComponent} from './adm.noticia-detalle.component';

import {AdmPedidosListComponent} from './adm.pedidos-list.component';


@Component({
  selector: 'admin',
  template: `
  <div *ngIf="usuario.EsAdmin" class="container">
        <menuAdmin></menuAdmin>
    <div class="col-md-9 col-sm-9 col-lg-9" id="inicio">
        <div id="head">
            <h2>Administración</h2>
        </div>
        <router-outlet></router-outlet>
    </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES,AdministracionComponent]
})
@RouteConfig([



    {path: '/administracion/usuarios', name: 'AdmUsuarios', component: AdmUsuarioListComponent, useAsDefault: true},

    {path: '/administracion/productos', name: 'AdmProductos', component: AdmProductoListComponent},
    {path: '/administracion/producto/:id', name: 'AdmProductoDetalle', component: AdmProductoDetalleComponent},
    {path: '/administracion/producto/nuevo', name: 'AdmNuevoProducto', component: AdmNuevoProductoComponent},
    {path: '/administracion/producto/editar/:id', name: 'AdmEditarProducto', component: AdmNuevoProductoComponent},

    {path: '/administracion/noticias', name: 'AdmNoticias', component: AdmNoticiaListComponent},
    {path: '/administracion/noticia/:id', name: 'AdmNoticiaDetalle', component: AdmNoticiaDetalleComponent},
    {path: '/administracion/noticia/nueva', name: 'AdmNuevaNoticia', component: AdmNuevaNoticiaComponent},
    {path: '/administracion/noticia/editar/:id', name: 'AdmEditarNoticia', component: AdmNuevaNoticiaComponent},

    {path: '/administracion/pedidos', name: 'AdmPedidos', component: AdmPedidosListComponent},

])
export class AdminComponent implements OnInit {
  usuario:Usuario;
  constructor(private auth0:UsuarioService, private router:Router) {
      this.auth0.usuarioReg.subscribe(
        Usuario => this.usuario = Usuario,
        error => console.log(error));
    }
    ngOnInit(){
      if(!this.auth0.usuario.EsAdmin){
        window.confirm("Registrate como Administrador");
        this.router.navigate(['Registro']);
    }

}
