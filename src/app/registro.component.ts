import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'app/registro.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class RegistroComponent {

    usuario: Usuario;
    nombre:string;
    pass:string;

    constructor(
      private _router:Router,
      private service: UsuarioService){

    }

    comprobar() {
      let num = this.service.getComprobarUsuario(nombre,pass);
      if(num !== 0){
        
      }else{

      }
    }

}
