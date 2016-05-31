import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Producto} from './producto.service';
import {Usuario} from './usuario.service';

export interface Pedido{

  id?:number;
  productos: Producto[];
}
