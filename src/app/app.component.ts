import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
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
import {NavSupComponent} from './nav-sup.component';
import {AdministracionComponent} from './administracion.component';

import {AdmUsuarioListComponent} from './adm.usuario-list.component';

import {AdmProductoListComponent} from './adm.producto-list.component';
import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';

import {AdmNoticiaListComponent} from './adm.noticia-list.component';
import {AdmNuevaNoticiaComponent} from './adm.nueva.noticia.component';
import {AdmNoticiaDetalleComponent} from './adm.noticia-detalle.component';

import {AdminComponent} from './admin';

@Component({
  selector: 'app',
  template: `
    <cabecera-app></cabecera-app>
    <router-outlet></router-outlet>
    <footer><footer-app></footer-app></footer>
  `,
    providers:  [ProductoService,PedidoService,NoticiaService,UsuarioService],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent,NavSupComponent]
})
@RouteConfig([
    {path: '/', name: 'Cuerpo', component: CuerpoComponent, useAsDefault: true},
    {path: '/producto/:id', name: 'ProductoDetail', component: InfoProdComponent},
    {path: '/Categoria/:categoria', name: 'Categoria', component: ProductoComponent},
    {path: '/Pedido', name: 'Carrito', component: CarritoComponent},
    {path: '/Usuario', name: 'Usuarioinfo', component: UsuarioComponent},
    {path: '/Noticias', name: 'Noticias', component: NoticiaComponent},
    {path: '/registro', name: 'Registro', component: RegistroComponent},

    {path: '...', name: 'Administracion', component: AdminComponent},

    {path: '/Buscador/:nombre', name: 'Buscador', component: ProductoComponent},

])
export class AppComponent {


}
