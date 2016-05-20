import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Producto} from './producto.service';
import {Usuario} from './usuario.service';

export class PedidoProducto{
  private producto:Producto;
  private num:number;
  constructor(producto:Producto,num:number){
    this.producto=producto;
    this.num=num;
  }

  get Producto(){
    return this.producto;
  }
  get Num(){
    return this.num;
  }
  set Producto(p:Producto){
    this.producto=p;
  }
  set Num(num:number){
    this.num=num;
  }
}


export class Pedido{
  private producto:PedidoProducto;
  private pedido:Array<PedidoProducto>;
  private usuario: Usuario;
  private enProceso: boolean;

  constructor(){
    this.pedido= new Array<PedidoProducto>();
    this.enProceso=true;
  }

  set addProducto(producto:Producto){

    let encontrado:boolean=false;

    for(let pedido of this.pedido ){
      if(producto.Id == pedido.Producto.Id){
        pedido.Num = pedido.Num +1;
        encontrado=true;
      }
    }

      if(!encontrado){
        let cosa = new PedidoProducto(producto,1);
        this.pedido.push(cosa);
    }
  }
 getpedido(id:number):Producto{
   for(let producto of this.pedido){
     if(producto.Producto.Id == id){
       return producto.Producto;
     }
   }
 }
 get pedidos(){
   return this.pedido;
 }

 getNum(id:number):number{
   for(let producto of this.pedido){
     if(producto.Producto.Id == id){
       return producto.Num;
     }
   }
 }

}

@Injectable()
export class PedidoService{
    pedido = new Pedido();


  setaddPedido(producto:Producto){
    this.pedido.addProducto=producto;
    return withObserver(producto);
  }

  DelPedido(){
    this.pedido = null;
  }

  getPedido(id: number | string){
    let num:number=Number(id);
    let producto = this.pedido.getpedido(num);
    return withObserver(producto);
  }


  get Pedidos() {
    return withObserver(this.pedido.pedidos);
  }

}
