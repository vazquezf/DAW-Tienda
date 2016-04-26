import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Producto} from './producto.service';

export class Usuario{

  private nombre: string;
  private primerApellido: string;
  private segundoApellido: string;
  private userName: string;
  private userLogin: string;
  private idUsuario: number;
  private pedidos: Array<Producto>;


  constructor(nombre: string, primerApellido: string, segundoApellido: string, userName: string, userLogin: string, idUsuario: number){
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.userName = userName;
    this.userLogin = userLogin;
    this.idUsuario = idUsuario;
    this.pedidos = new Array<Producto>();
  }


}
