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
      if(num>0){
        this.num=num;
      }
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

  setaddProducto(producto:Producto,cantidad:number){

    let encontrado:boolean=false;

    for(let pedido of this.pedido ){
      if(producto.Id == pedido.Producto.Id){
        pedido.Num = pedido.Num +cantidad;
        encontrado=true;
      }
    }

      if(!encontrado){
        let cosa = new PedidoProducto(producto,cantidad);
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
 borrarProducto(p:PedidoProducto){
   for(let i=0 ;i < this.pedido.length;i++ ){
     if(p.Producto.Id == this.pedido[i].Producto.Id){
       this.pedido.splice(i,1);

     }
   }
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


  setaddPedido(producto:Producto,cantidad:number){
    this.pedido.setaddProducto(producto,cantidad);
    return withObserver(producto);
  }

  eliminarProducto(p:PedidoProducto){
    window.confirm("eliminar++    +"+p.Producto.Nombre);
    this.pedido.borrarProducto(p);
  }

  getPedido(id: number | string){
    let num:number=Number(id);
    let producto = this.pedido.getpedido(num);
    return withObserver(producto);
  }
  DelPedidos(){
    this.pedido.pedidos.splice(0,this.pedido.pedidos.length);
  }

  get Pedidos() {
    return withObserver(this.pedido.pedidos);
  }

}
