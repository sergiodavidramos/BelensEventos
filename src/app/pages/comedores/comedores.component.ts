import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Servicio } from 'src/app/models/servicio.model';
import swal from "sweetalert";

@Component({
  selector: 'app-comedores',
  templateUrl: './comedores.component.html',
  styles: []
})
export class ComedoresComponent implements OnInit {


  public ocultarBoton: string ='';
  public ocultarPerfil: string ='';
  correo: string='';
  usuario: Usuario;
  servicios: Servicio[]=[];

  constructor(
    public _usuarioServices: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarServicios();
    this.usuario= this._usuarioServices.usuario;
    this.correo=this.usuario.email;
    if(this.usuario._id.length>3){
      this.ocultarBoton='oculto';
    }else{

      this.ocultarPerfil='oculto';
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

  cargarServicios(){
    this._usuarioServices.cargarServicios('comedores').subscribe((resp:any)=>{
      // console.log(resp.paquetes);
      this.servicios = resp.servicios;
      console.log("Sercio -comedores......",this.servicios[0]);
      // console.log("Prueba",this.paquetes[0].servicios[0]._id);
      
    })
  }


  carrito(){
    console.log("corrito")
    let button=document.getElementById('button');
    let bell=document.getElementById('notification');
    var count= Number(bell.getAttribute('data-count')) || 0;
    bell.setAttribute('data-count',  (count+1).toString());
    bell.classList.add('show-count');
    bell.classList.add('notify');

    bell.addEventListener('animationend', ()=>{
        bell.classList.remove('notify');
    });
  }


}
