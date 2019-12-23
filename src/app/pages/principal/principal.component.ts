import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import swal from "sweetalert";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  public ocultarBoton: string ='';
  public ocultarPerfil: string ='';
  correo: string='';
  usuario: Usuario;

  constructor(
    public _usuarioServices: UsuarioService
  ) { }

  ngOnInit() {
    if(this._usuarioServices.usuario===null){
      console.log("todo vacio",this._usuarioServices.usuario);
      this.ocultarPerfil='oculto';
      
    }else{
      this.usuario= this._usuarioServices.usuario;
      console.log("werty",this.usuario);
      this.correo=this.usuario.email;
      if(this.usuario._id.length>3 ){
        this.ocultarBoton='oculto';
      }
    }
  }


  ingresar(forma: NgForm){
    console.log("hola",forma.value)

    let usuario= new Usuario(null,forma.value.email, forma.value.password);

    this._usuarioServices.login(usuario).subscribe(correcto=>{
        console.log(correcto);
        if(correcto){
          swal('Bienvenido', '','success');
          this.ocultarBoton="oculto";
          this.ocultarPerfil="";
   
          console.log("usuario:", this._usuarioServices.usuario.email );
          
        }
    })
  }


  registrarse(forma: NgForm){
    console.log("hola",forma.value)
    let usuario = new Usuario(forma.value.nombre,
      forma.value.email,
      forma.value.password,
      forma.value.telefono);
      this._usuarioServices.registrarse(usuario).subscribe(resp=>{
        console.log("la respusta", resp);
    
      })
    

  }

}
