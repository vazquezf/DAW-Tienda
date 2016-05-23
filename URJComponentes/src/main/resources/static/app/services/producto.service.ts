import {Injectable} from 'angular2/core';
import {withObserver} from './utils';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


export interface Producto {
  Id:number;
  Nombre: string;
  Descripcion_corta:string;
  Img_ruta:string;
  Precio:number;
  Stock:number;
  Descripcion_larga:string;
  Destacado: boolean;
  Novedad: boolean;
  Tipo: string;

}

const URL = 'productos/';

@Injectable()
export class ProductoService{

  constructor(private http: Http) { }

  getProductos() {
     return this.http.get(URL)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  getProducto(id: number | string) {
     return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  saveProducto(producto: Producto){
     let body = JSON.stringify(producto);
     let headers = new Headers({'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'});
     let options = new RequestOptions({ headers });
   return this.http.post(URL, body,options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    removeProducto(producto: Producto){
     let headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
	 let options = new RequestOptions({ headers });
	 return this.http.delete(URL + producto.Id,options)
     	.map(response => undefined)
     	.catch(error => this.handleError(error));
   }

  updateBook(producto: Producto) {

    let body = JSON.stringify(producto);
    let headers = new Headers({'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'});
    let options = new RequestOptions({ headers });
	return this.http.put(URL + producto.Id, body,options)
    	.map(response => response.json())
    	.catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }


}
