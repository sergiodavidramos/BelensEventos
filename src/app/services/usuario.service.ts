import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  id: string;
  usuario: Usuario;

   servicios =[];
  //  : Array<object>;
  contador:number=0;
  total: number=0;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {

    this.cargarStorage();
   }

  //  cargarStorageServicio(servi: any){
  //   if(localStorage.getItem('id')){
  //     this.id = localStorage.getItem('id');
  //     this.usuario = JSON.parse(localStorage.getItem('usuario'));
  //   }else{
  //     this.id= '';
  //     this.id= null;
  //   }
  // }



  cargarStorage(){
    if(localStorage.getItem('id')){
      this.id = localStorage.getItem('id');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.id= '';
      this.id= null;
    }
  }

  guardarStorage(id: string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.usuario= usuario;
  }

  logout(){
    this.usuario=null;
    this.id = "";

    localStorage.removeItem('id');
    localStorage.removeItem('usuario');

    this.router.navigate(['/inicio']);


  }
  login(usuario: Usuario){
    let url = URL_SERVICIOS+'/login';
    return this.http.post(url,usuario)
        .pipe(map((resp:any)=>{
           console.log(resp.usuario);
          this.guardarStorage(resp.id, resp.usuario);
          return true;

        }))
  }

  registrarse(usuario: Usuario){
    let url = URL_SERVICIOS+'/usuario';

    return this.http.post(url, usuario).pipe(map((resp:any)=>{
      swal('Registrado', usuario.email,'success');
      return resp.usuario;
    }))
  }


  cargarPaquetes(){
    let url = URL_SERVICIOS+'/paquete';
    return this.http.get(url);
  }

  cargarServicios(categoria:string){
    let url = URL_SERVICIOS+'/servicio/'+categoria;
    return this.http.get(url);
  }
  cargarpromos(){
    let url = URL_SERVICIOS+'/promo/';
    return this.http.get(url);
  }
}
  