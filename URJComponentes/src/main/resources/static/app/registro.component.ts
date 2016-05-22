import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService,Usuario} from './services/usuario.service';
import {NavSupComponent} from './nav-sup.component';
@Component({
    templateUrl: 'app/registro.component.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class RegistroComponent {

    usuario: Usuario;
    nombre:string;
    pass:string;
    constructor(
      private router:Router,
      private service: UsuarioService){

    }

    comprobar() {
      let num = this.service.getComprobarUsuario(this.nombre, this.pass);
      if(num !== 0){
          this.service.loguear=num;
          window.confirm(this.service.usuario.Nombre);
          if(this.service.usuario.EsAdmin){
            this.router.navigate(['Administracion']);
          }else{
              this.router.navigate(['Usuarioinfo']);
          }
      }else{
          window.console.log('no se encuentra');
      }
    }

}
