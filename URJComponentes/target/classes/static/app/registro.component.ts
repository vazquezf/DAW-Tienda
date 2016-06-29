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
    nombre: string;
    pass:string;
    constructor(
      private router:Router,
      private service: UsuarioService){

    }
	logIn(event: any){

	  event.preventDefault();

	  this.service.logIn(this.nombre, this.pass).subscribe(
	      user => {this.usuario=user;
          this.router.navigate(['Usuarioinfo']);
          },
	      error => alert("Invalid user or password")
      );
  	}

	  logOut(){
		this.service.logOut().subscribe(
			response => console.log("Usuario logOut"),
			error => console.log("Error when trying to log out: "+error)
		);
	  }

}
