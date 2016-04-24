import {Injectable} from 'angular2/core';
import {Producto,ProductoService} from './producto.service';

@Injectable()
export class CarritoService {

private carrito = [
   new Producto(134, 'GTX 760'
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

    getCarrito() {

      return this.carrito
   }
   

}