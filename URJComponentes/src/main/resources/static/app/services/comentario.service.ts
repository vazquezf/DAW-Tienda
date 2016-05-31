import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export interface Comentario{

  id?:number;
  opinion:string;
  valoracion_pos:string;
  valoracion_neg:string;
  recomendacion:string;
  nombreUsuario:string;
}
  
