import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {provide} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ProductoService} from './app/producto.service';
import {CarritoService} from './app/carrito.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,ProductoService,CarritoService, provide(LocationStrategy, {useClass: HashLocationStrategy})
]);