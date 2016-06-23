import { Injectable, OnInit } from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';
import {Pedido} from './pedido.service';
import {Observable} from 'rxjs/Observable';

export interface Usuario{

   id?: number;
   name: string;
   primerApellido: string;
   segundoApellido: string;
   userName: string;
   passwordHash: string;
   email:string;
   pedidos: Pedido[];
   roles: string[];
}
const URL = 'user/';

@Injectable()
export class UsuarioService {

	isLogged = false;
	isAdmin = false;
	user: Usuario;

	constructor(private http: Http){
		this.reqIsLogged();
	}

	reqIsLogged(){

		let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});

		let options = new RequestOptions({headers});

		this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+
						JSON.stringify(error));
				}
			}
		);
	}

	private processLogInResponse(response){
		this.isLogged = true;
		this.user = response.json();
		console.log(response.json());
		this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
	}

	logIn(user: string, pass: string) {

		let userPass = user + ":" + pass;

		let headers = new Headers({
			'Authorization': 'Basic '+utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});

		let options = new RequestOptions({headers});

		return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.user;
			}
		);
	}

	logOut(){

		return this.http.get('logOut').map(
			response => {
				this.isLogged = false;
				this.isAdmin = false;
				return response;
			}
		);
	}
  pedir(producto:Pedido){
  }
  getUsers() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
