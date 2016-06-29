import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Producto} from './producto.service';
import {PedidoProducto} from './pedido.service';

export interface Usuario{

   id?: number;
   nombre: string;
   primerApellido: string;
   segundoApellido: string;
   userName: string;
   userLogin: string;
   email:string;
   pedidos: Pedido[];
   admin: boolean;
}

  
@Injectable()
export class UsuarioService{

  usuario= new Usuario("","","","","","",false);

  get usuarioReg(){
    return withObserver(this.usuario);
  }

  getProducto(id: number | string) {
    let user = this.users.filter(h => h.Id === +id)[0]
    return withObserver(user);
  }

  getComprobarUsuario(nombre:string,pass:string):number {
    let encontrado:number =0;
    for(let user of this.users) {
      if (user.UserName==nombre && user.UserLogin==pass) {
        encontrado= user.Id;
      }
    }
    return encontrado;
  }
  getusuario(id:number | string){
      let usuario = this.users.filter(h => h.Id === +id)[0];
      return usuario;
  }

  set loguear(id:number){
    this.usuario = this.getusuario(id);
  }
  deloguear(){
    let usuario = new  Usuario("","","","","","",false);
    this.usuario = usuario;
  }
  getUsuarios(){
    return withObserver(this.users);
  }

  addPedido(pedido:Array<PedidoProducto>){
      let usuario = this.users.filter(h => h.Id === this.usuario.Id)[0];
      usuario.Comprar= pedido;
    }
}
