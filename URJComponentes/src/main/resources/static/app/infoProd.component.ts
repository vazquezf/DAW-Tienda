import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Producto, ProductoService}   from './services/producto.service';
/*import {PedidoService} from './services/pedido.service';*/
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
  cantidad=1;
  opinion:string;
  valorp:string;
  valorn:string;
  recomienda:string;
  condiciones=false;
  alerta:string;
  alertaUsuario:string;

  constructor(routeParams: RouteParams, private service: ProductoService,private ath0:UsuarioService) {
    let id = routeParams.get('id');
        this.service.getProducto(id).subscribe(
        producto => this.producto = producto,
        error => console.log(error)
    );
}
guardarComentario(){
  if(this.opinion && this.recomienda && this.ath0.isLogged){
    let nombre = this.ath0.user.name;
    let comentario: Comentario = {opinion: this.opinion, valoracion_pos: this.valorp, valoracion_neg: this.valorn,recomendacion: this.recomienda,nombreUsuario: nombre}
    this.service.addComentario(this.producto.id,comentario).subscribe(
    comentario => this.producto.comentarios.push(comentario),
    error => console.log(error)
  );
    this.resetformulario();
  }
  if(!this.recomienda){
    this.alerta="Error:¿Lo recomendarias?";
  }else{this.alerta="";}
  if(!this.ath0.isLogged){
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

save(){
  /*if(this.cantidad>0){
  	this.producto.cantidad = this.cantidad;
    this.servicepd.setaddPedido(this.producto);
  }
*/
}
deshabilitar():boolean{
    if(this.producto.stock>0 && this.ath0.isLogged){
      return false;
    }else{
      return true;
    }
  }

acepta(){
  this.condiciones=!this.condiciones;
}


}
