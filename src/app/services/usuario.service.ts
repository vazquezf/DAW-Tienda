import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Producto} from './producto.service';

export class Usuario{
  private static num: number =0;
  private id: number;
  private nombre: string;
  private primerApellido: string;
  private segundoApellido: string;
  private userName: string;
  private userLogin: string;
  private pedidos: Array<Producto>;
  private admin: boolean;


  constructor(nombre: string, primerApellido: string, segundoApellido: string, userName: string, userLogin: string,admin : boolean){
    Usuario.num = Usuario.num+1;
    this.id= Usuario.num;
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.userName = userName;
    this.userLogin = userLogin;
    this.admin = admin;
    this.pedidos = new Array<Producto>();

  }

  get Id():number{
    return this.id;
  }
  get Nombre():string{
    return this.nombre;
  }
  get PrimerApellido():string{
    return this.primerApellido;
  }
  get SegundoApellido():string{
    return this.segundoApellido;
  }
  get UserName():string{
    return this.userName;
  }
  get UserLogin():string{
    return this.UserLogin;
  }
  set Nombre(nombre:string){
     this.nombre=nombre;
  }
  set PrimerApellido(pa:string){
    this.primerApellido=pa;
  }
  set SegundoApellido(sa:string){
    this.segundoApellido=sa;
  }
  set UserName(user:string){
    this.userName=user;
  }
  set UserLogin(pass:string){
    this.UserLogin=pass;
  }
}
@Injectable()
export class UsuarioService{
  users = [new Usuario('manolo', 'Felipe', 'estac', 'admin', 'admin',true),
  new Usuario('Carlos', 'casf', 'perfsj', 'user', 'user',false)];

  usuario:Usuario;

  getComprobarUsuario(nombre:string,pass:string): number {
    let encontrado =0;
    for(let user of this.users) {
      if (user.UserName==nombre && user.UserLogin==pass) {
        encontrado= user.Id;
      }
    }
    return withObserver(encontrado);
  }
  getusuario(id:number): Usuario{
      let usuario = this.users.filter(h => h.Id === +id)[0]
      return withObserver(usuario);
  }

  set loguear(id:number){
    this.usuario = this.getusuario(id);
  }


}
