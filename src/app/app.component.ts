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
//import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

import {AdministracionComponent} from './administracion.component';

import {AdmProductoListComponent} from './adm.producto-list.component';
import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';


import {AdmNoticiaListComponent} from './adm.noticia-list.component';
import {AdmNuevaNoticiaComponent} from './adm.nueva.noticia.component';
import {AdmNoticiaDetalleComponent} from './adm.noticia-detalle.component';


@Component({
  selector: 'app',
  template: `
    <cabecera-app></cabecera-app>
    <router-outlet></router-outlet>
    <footer><footer-app></footer-app></footer>
  `,
    providers:  [ProductoService,PedidoService,NoticiaService],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
@RouteConfig([
    {path: '/', name: 'Cuerpo', component: CuerpoComponent, useAsDefault: true},
    {path: '/producto/:id', name: 'ProductoDetail', component: InfoProdComponent},
    {path: '/Categoria/:categoria', name: 'Categoria', component: ProductoComponent},
    {path: '/Pedido', name: 'Carrito', component: CarritoComponent},
    {path: '/Usuario', name: 'Usuarioinfo', component: UsuarioComponent},
    {path: '/Noticias', name: 'Noticias', component: NoticiaComponent},

    {path: '/administracion', name: 'Administracion', component: AdministracionComponent},

    {path: '/administracion/productos', name: 'AdmProductos', component: AdmProductoListComponent},
    {path: '/administracion/producto/:id', name: 'AdmProductoDetalle', component: AdmProductoDetalleComponent},
    {path: '/administracion/producto/nuevo', name: 'AdmNuevoProducto', component: AdmNuevoProductoComponent},
    {path: '/administracion/producto/editar/:id', name: 'AdmEditarProducto', component: AdmNuevoProductoComponent},

    {path: '/administracion/noticias', name: 'AdmNoticias', component: AdmNoticiaListComponent},
    {path: '/administracion/noticia/:id', name: 'AdmNoticiaDetalle', component: AdmNoticiaDetalleComponent},
    {path: '/administracion/noticia/nueva', name: 'AdmNuevaNoticia', component: AdmNuevaNoticiaComponent},
    {path: '/administracion/noticia/editar/:id', name: 'AdmEditarNoticia', component: AdmNuevaNoticiaComponent},

])
export class AppComponent {


}
