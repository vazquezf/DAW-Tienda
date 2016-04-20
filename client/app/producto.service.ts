import {Injectable} from 'angular2/core';

export class Producto {
  constructor(
  public id: number, 
  public titulo: string, 
  public shortDescrip: string, 
  public img: string, 
  public precio: number, 
  public longDescrip: string, 
  ) { }
}
@Injectable()
export class ProductoService {

  private productos = [
    new Producto(1, 'GTX 760'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,400
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.'),
    
    new Producto(1, 'GTX 760'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,400
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.'),
    
    new Producto(1, 'GTX 760'
    ,'Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos'
    ,''
    ,400
    ,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.'),
    
    ];

    getProductos() {

      return this.productos
   }

    getProducto(id: number | string) {
      return this.productos.filter(h => h.id === +id)[0];
    }
}
