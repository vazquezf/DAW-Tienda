import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Comentario{
  private static count:number = 0;
  private opinion:string;
  private valoracion_pos:string;
  private valoracion_neg:string;
  private recomendacion:boolean;
  private id:number;
  private idUsuario:number;

  constructor( opinion:string, valoracion_pos:string, valoracion_neg:string, recomendacion:boolean, id:number,idUsuario:number){
    Comentario.count = Comentario.count +1;
    this.id=Comentario.count;
    this.opinion = opinion;
    this.valoracion_pos=valoracion_pos;
    this.valoracion_neg=valoracion_neg;
    this.recomendacion = recomendacion;
    this.idUsuario = idUsuario;
  }


  get Id():number{
    return this.id;
  }
  get Opinion():string{
    return this.opinion;
  }
  get ValoracionPos():string{
    return this.valoracion_pos
  }
  get ValoracionNeg():string{
    return this.valoracion_neg;
  }
  get Recomendacion():boolean{
    return this. recomendacion;
  }
  get IdUsuario():number{
    return this.idUsuario;
  }
  set Id(id:number){
    this.id=id;
  }
  set Opinion(op:string){
    this.opinion= op;
  }
  set ValoracionPos(vp:string){
    this.valoracion_pos=vp;
  }
  set ValoracionNeg(vn:string){
    this.valoracion_neg=vn;
  }
  set Recomendacion(re:boolean){
    this. recomendacion=re;
  }
  set IdUsuario(idu:number){
    this.idUsuario=idu;
  }

}


@Injectable
export class ComentarioService{
  
}
