import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {CuerpoComponent} from './cuerpo.component';

@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/prueba.html',
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent,CuerpoComponent],
  pipes: []
})
@RouteConfig([
])
export class MainApp {

}
