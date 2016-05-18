import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';

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
      let num = this.service.getComprobarUsuario(this.nombre, this.pass);
      console.log(this.nombre);
      console.log(this.pass);
      if(num !== 0){
          this.service.loguear=num;
          console.log('USUARIO LOGUEADO');
      }else{
          console.log('USUARIO NOOOOOOO LOGUEADO');
      }
    }

}
