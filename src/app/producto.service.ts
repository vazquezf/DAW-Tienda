import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Producto {
  constructor(
    public id: number,
    public titulo: string,
    public shortDescrip: string,
    public img: string,
    public precio: number,
    public longDescrip: string,
    public destacado?: boolean,
    public novedad?: boolean
    ) {}
}
@Injectable()
export class ProductoService {

  private productos = [
    new Producto(4, 'GTX 760'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,400
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,false),

    new Producto(1, 'GTX 860'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,1070
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',false,true),

    new Producto(2, 'GTX 750'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,500
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,true),

     new Producto(3, 'GTX 560'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,200
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,true),

    ];

    getProductos() {
      return withObserver(this.productos);
   }

    getProducto(id: number | string) {
      let producto = this.productos.filter(h => h.id === +id)[0]
      return withObserver(new Producto(producto.id, producto.titulo, producto.shortDescrip, producto.img, producto.precio, producto.longDescrip));
    }

    removeProducto(producto: Producto){
      for(let i=0; i<this.productos.length; i++){
          if(this.productos[i].id === producto.id){
            this.productos.splice(i,1);
            break;
          }
      }
      return withObserver(undefined);
    }
    
    saveProducto(producto: Producto){
      if(producto.id){
        let oldProducto = this.productos.filter(h => h.id === producto.id)[0];
        oldProducto.titulo = producto.titulo;
        oldProducto.img = producto.img;
        oldProducto.shortDescrip = producto.shortDescrip;
        oldProducto.precio = producto.precio;
        oldProducto.longDescrip = producto.longDescrip;
      } else {
        producto.id = this.productos.length+1;
        this.productos.push(producto);
      }
      return withObserver(producto);
    }

}
