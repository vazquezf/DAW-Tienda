import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {CuerpoComponent} from './cuerpo.component';
import {CarritoComponent} from './carrito.component';
import {ProductoComponent} from './producto.component';
import {NoticiasComponent} from './noticias.component';
import {AdministracionComponent} from './administracion.component';
import {BuscadorComponent} from './buscador.component';
import {RegistroComponent} from './registro.component';



@Component({
  selector: 'app',
  template: `
    <cabecera-app></cabecera-app>
    <router-outlet></router-outlet>
    <footer-app></footer-app>
  `,
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
@RouteConfig([
    {path: '/', name: 'Cuerpo', component: CuerpoComponent, useAsDefault: true},
    {path: '/Producto', name: 'Producto', component: ProductoComponent},
    {path: '/Carrito', name: 'Carrito', component: CarritoComponent},
    {path: '/Noticias', name: 'Noticias', component: NoticiasComponent},
    {path: '/Administracion', name: 'Administracion', component: AdministracionComponent},
    {path: '/Buscador', name: 'Buscador', component: BuscadorComponent},
    {path: '/Registro', name: 'Registro', component: RegistroComponent},
])
export class AppComponent { }
