import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Comentario} from './comentario.service';

export class Producto{
  private static productos: Array<Producto> = new Array<Producto>();
  private id:number;
  private static almacen=30;
  private static count=1;
  private nombre: string;
  private descripcion_corta:string;
  private img_ruta:string;
  private precio:number;
  private stock:number;
  private descripcion_larga:string;
  private destacado: boolean;
  private novedad: boolean;
  private tipo: string;
  private comentario:Array<Comentario>;

  constructor( nombre: string,descripcion_corta:string, img_ruta:string,precio:number, stock:number,descripcion_larga:string,destacado: boolean,novedad: boolean, tipo:string){
    this.id=Producto.productos.length+1;
    this.nombre = nombre;
    this.descripcion_corta = descripcion_corta;
    this.img_ruta = img_ruta;
    this.precio = precio;
    this.stock = stock;
    this.descripcion_larga = descripcion_larga;
    this.destacado=destacado;
    this.novedad=novedad;
    this.tipo = tipo;
    this.comentario = new Array<Comentario>();
    Producto.productos.push(this);

  }

  static get arrayProductos() : Array<Producto>{
    return Producto.productos;
  }
  get Comentarios():Array<Comentario>{
    return this.comentario;
  }
  get Id() : number{
    return this.id;
  }
  get Tipo() : string{
    return this.tipo;
  }
  get Nombre() : string{
    return this.nombre;
  }
  get DescripcionC(): string{
    return this.descripcion_corta;
  }
  get Img(): string{
    return this.img_ruta;
  }
  get Precio(): number{
    return this.precio;
  }
  get Stock(): number{
    return this.stock;
  }
  get Destacado(): boolean{
    return this.destacado;
  }
  get Novedad(): boolean{
    return this.novedad;
  }
  get DescripcionL(): string{
    return this.descripcion_larga;
  }
  get PortStock():number{
      return 100*(this.stock/Producto.almacen);
  }

  static getByTipo(tipazo: string): Array<Producto> {
    var componentes = new Array<Producto>();
    for(let produ of Producto.arrayProductos) {
      if (produ.tipo == tipazo) {
        componentes.push(produ);
      }
    }
    return componentes;
  }

  get ProgressBarra():string{
    var estado;
    if (this.PortStock < 30) {
      estado = 'danger';
    }else if (this.PortStock < 60){
      estado = 'warning';
    }
      else{
        estado = 'success';
      }
    return estado;
  }
  get Producto():Producto{
    return this;
  }

  set Comentario(com:Comentario){
    this.comentario.push(com);
  }
  set Tipo(tipo:string){
    this.tipo=tipo;
  }
  set Nombre(nombre:string){
     this.nombre= nombre;
  }
  set DescripcionC(descripcion_corta:string){
     this.descripcion_corta= descripcion_corta;
  }
  set Img(img_ruta:string){
     this.img_ruta=img_ruta;
  }
  set Precio(precio:number){
     this.precio=precio;
  }
  set Stock(stock:number){
     this.stock=stock;
  }
  set DescripcionL(descripcion_larga:string){
     this.descripcion_larga=descripcion_larga;
  }
  editarId(existe:boolean){
    this.id=this.id+1;
  }

  static getByBuscador(nombrep: string): Array<Producto> {
    var componentes = new Array<Producto>();
    if(nombrep!==null){
      nombrep=nombrep.toLowerCase();
    }
    for(let produ of Producto.arrayProductos) {
      if(produ.nombre.toLowerCase().indexOf(nombrep)>-1){
        componentes.push(produ);
      }
    }
    return componentes;
  }


}

@Injectable()
export class ProductoService{

   producto = new Producto('GTX 760','Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos','Imagenes/item-1.jpg',250,5,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,false,'Portatil');
   producto1 = new Producto('Lg 530','Dispositivo movil blabla','Imagenes/item-2.jpg',200,18,'Nuevo movil de la compañia LG a sido finalmente distribuido,CORRAN!!.',true,true, 'Ultrabook');
   producto2 = new Producto('G Skill DRR3 2100','Memoria RAM, lista para la nueva generación','Imagenes/item-3.jpg',325,12,'Memoria RAM, lista para la nueva generación,Memoria RAM, lista para la nueva generación,Memoria RAM, lista para la nueva generación,Memoria RAM, lista para la nueva generación.',true,false, 'TabletPC');
   producto3 = new Producto('Cooler','Mejor que en el desierto, sin duda lo mejor dejarte esto en el....','Imagenes/item-4.jpg',75,0,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,false,'Portatil');
   producto4 = new Producto('LG 231','Comentario Corto, muy muy corto','Imagenes/item-2.jpg',89,13,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',true,true,'Portatil');
   producto5 = new Producto('G Skill DRR3 2600','Targeta grafica de gamma alta pero que permitira jugar a las ultimas tendencias en videojuegos','Imagenes/item-3.jpg',25,15,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',false,true, 'TabletPC');
   producto6 = new Producto('Cooler 2011','La mejor manera de enfriar los animos','Imagenes/item-4.jpg',120,15,'La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC. Estos modelos mejorados ofrecen una refrigeración mejorada, soporte doble BIOS, nueva configuración de salida de la pantalla y 6 fases de poder para el apoyo overclocking extremo. Estas nuevas tarjetas también vienen dotados de EVGA ACX 2.0+ refrigeración, con aspas optimizadas en el ventilador, doble rodamiento de rulemanes y un motor de extrema baja potencia. La refrigeración EVGA ACX 2.0+ ofrece más flujo de aire, con menos potencia, el desbloqueo de energía adicional para la GPU.',false,false, 'TabletPC');



  getProducto(id: number | string) {
    let producto = Producto.arrayProductos.filter(h => h.Id === +id)[0]
    return withObserver(producto);
  }
  addComentario(id:number,c:Comentario){
    let producto = Producto.arrayProductos.filter(h => h.Id === +id)[0]
    producto.Comentario=c;
  }
  getComentarios(id:number):Array<Comentario>{
    let producto = Producto.arrayProductos.filter(h => h.Id === +id)[0]
    return producto.Comentarios;
  }
  get Productos() {
    return withObserver(Producto.arrayProductos);
  }

  getByTipo(tipo:string) {
    return withObserver(Producto.getByTipo(tipo));
  }


  removeProducto(producto: Producto){
      for(let i=0; i<Producto.arrayProductos.length; i++){
          if(Producto.arrayProductos[i].Id === producto.Id){
            Producto.arrayProductos.splice(i,1);
            break;
          }
      }
      return withObserver(undefined);
    }

    saveProducto(producto: Producto){
      if(producto.Id){
        let oldProducto = Producto.arrayProductos.filter(h => h.Id === producto.Id)[0];
        oldProducto.Nombre = producto.Nombre;
        oldProducto.Img = producto.Img;
        oldProducto.DescripcionC = producto.DescripcionC;
        oldProducto.Precio = producto.Precio;
        oldProducto.DescripcionL = producto.DescripcionL;
        oldProducto.Stock = producto.Stock;
        oldProducto.Tipo = producto.Tipo;
      } else {
        Producto.arrayProductos.push(producto);
      }
      return withObserver(producto);
    }

    getByBuscador(nombrep:string) {
      return withObserver(Producto.getByBuscador(nombrep));
    }

    removeComentario(producto: Producto, id: number){
        for(let i=0; i<Producto.arrayProductos.length; i++){
            if(Producto.arrayProductos[i].Id === producto.Id){
              for(let j=0; j<Producto.arrayProductos[i].Comentarios.length; j++){
                if(Producto.arrayProductos[i].Comentarios[j].Id === id){
                  Producto.arrayProductos[i].Comentarios.splice(j,1);
                  break;
                }
              }
            }
        }
        return withObserver(undefined);
      }

}
