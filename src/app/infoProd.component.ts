import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto, ProductoService}   from './services/producto.service';
import {PedidoService} from './services/pedido.service';
import {NavSupComponent} from './nav-sup.component';
import {Comentario} from './services/comentario.service';
import {UsuarioService} from './services/usuario.service';
@Component({
    selector: 'infoproducto',
    templateUrl: 'app/infoProducto.html',
    directives: [ROUTER_DIRECTIVES,NavSupComponent]
})

export class InfoProdComponent {
  producto : Producto;
  comentarios:Array<Comentario>;
  cantidad=1;
  opinion:string;
  valorp:string;
  valorn:string;
  recomienda:boolean;

  constructor(routeParams: RouteParams, private service: ProductoService,private servicepd: PedidoService,private ath0:UsuarioService) {
    let id = routeParams.get('id');
        service.getProducto(id).subscribe(
        producto => this.producto = producto,
        error => console.log(error)
    );
    this.cargarComentarios();
}
guardarComentario(){
  let comentario = new Comentario(this.opinion,this.valorp,this.valorn,this.recomienda,this.ath0.usuario.Nombre);
  this.service.addComentario(this.producto.Id,comentario);
  this.cargarComentarios();
}
cargarComentarios(){
  this.comentarios=this.service.getComentarios(this.producto.Id);

}
save(){
  if(this.cantidad>0){
    this.servicepd.setaddPedido(this.producto,this.cantidad);
  }

}
deshabilitar():boolean{
    if(this.producto.Stock>0){
      return false;
    }else{
      return true;
    }
  }


}
