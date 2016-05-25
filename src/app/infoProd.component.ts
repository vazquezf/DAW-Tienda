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
  recomienda:string;
  condiciones=false;
  alerta:string;
  alertaUsuario:string;

  constructor(routeParams: RouteParams, private service: ProductoService,private servicepd: PedidoService,private ath0:UsuarioService) {
    let id = routeParams.get('id');
        service.getProducto(id).subscribe(
        producto => this.producto = producto,
        error => console.log(error)
    );
    this.cargarComentarios();
}
guardarComentario(){
  if(this.opinion && this.recomienda && this.ath0.usuario.TipoUsuario!='Anonimo'){
    let comentario = new Comentario(this.opinion,this.valorp,this.valorn,this.recomienda,this.ath0.usuario.Nombre);
    this.service.addComentario(this.producto.Id,comentario);
    this.cargarComentarios();
    this.resetformulario();
  }
  if(!this.recomienda){
    this.alerta="Error:¿Lo recomendarias?";
  }else{this.alerta="";}
  if(this.ath0.usuario.TipoUsuario=='Anonimo'){
    this.alertaUsuario ="Error:No logueado";
  }else{this.alertaUsuario ="";}


}
getBorraradio():string{
  if(this.recomienda){
    return  'checked';
  }return  '';
}

resetformulario(){
  this.opinion=null;
  this.valorp=null;
  this.valorn=null;
  this.condiciones=false;
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

acepta(){
  this.condiciones=!this.condiciones;
}


}
