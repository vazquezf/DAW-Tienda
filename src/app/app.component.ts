import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {CuerpoComponent} from './cuerpo.component';
import {CarritoComponent} from './carrito.component';
import {ProductoComponent} from './producto.component';
import {ProductoService} from './producto.service';

import {NoticiasComponent} from './noticias.component';
import {AdministracionComponent} from './administracion.component';
import {BuscadorComponent} from './buscador.component';
import {RegistroComponent} from './registro.component';

import {AdmProductoListComponent} from './adm.producto-list.component';
import {AdmNuevoProductoComponent} from './adm.nuevo.producto.component';
import {AdmProductoDetalleComponent} from './adm.producto-detalle.component';

@Component({
  selector: 'app',
  template: `
    <cabecera-app></cabecera-app>
    <router-outlet></router-outlet>
    <footer-app></footer-app>
  `,
  providers:  [ProductoService],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent],

})
@RouteConfig([
    {path: '/', name: 'Cuerpo', component: CuerpoComponent, useAsDefault: true},
    {path: '/Producto/:id', name: 'Producto', component: ProductoComponent},
    {path: '/Carrito', name: 'Carrito', component: CarritoComponent},
    {path: '/Noticias', name: 'Noticias', component: NoticiasComponent},
    {path: '/administracion', name: 'Administracion', component: AdministracionComponent},
    {path: '/Buscador', name: 'Buscador', component: BuscadorComponent},
    {path: '/Registro', name: 'Registro', component: RegistroComponent},

    {path: '/administracion/productos', name: 'AdmProductos', component: AdmProductoListComponent},
    {path: '/administracion/producto/:id', name: 'AdmProductoDetalle', component: AdmProductoDetalleComponent},
    {path: '/administracion/producto/nuevo', name: 'AdmNuevoProducto', component: AdmNuevoProductoComponent},
    {path: '/administracion/producto/editar/:id', name: 'AdmEditarProducto', component: AdmNuevoProductoComponent},

])
export class AppComponent { }
