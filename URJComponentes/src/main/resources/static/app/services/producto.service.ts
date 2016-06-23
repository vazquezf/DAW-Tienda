import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Comentario} from './comentario.service';

export interface Producto {
    id?: number;
    nombre: string;
    description_corta: string;
    img_ruta: string;
    precio:number;
  	stock:number;
   	descripcion_larga:string;
  	destacado: boolean;
  	novedad: boolean;
   	tipo: string;
   	comentarios: Comentario[];
   	cantidad: number;
}

const URL = 'productos/';

@Injectable()
export class ProductoService {

  constructor(private http: Http) { }

  getProductos() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getProducto(id: number) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  saveProducto(product: Producto) {

    let body = JSON.stringify(product);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeProduct(product: Producto) {

	let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });

    return this.http.delete(URL + product.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateProduct(product: Producto) {

    let body = JSON.stringify(product);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + product.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

	addComentario(id: number, comentario: Comentario) {

    let body = JSON.stringify(comentario);
    let headers = new Headers({
        'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers });
    return this.http.post(URL+id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
