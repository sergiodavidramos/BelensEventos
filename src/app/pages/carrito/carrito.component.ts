import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import swal from "sweetalert";
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {


  public ocultarBoton: string = '';
  public ocultarPerfil: string = '';
  correo: string = '';
  usuario: Usuario;
  cont: number = 0;
  total: number = 0;

  constructor(
    public _usuarioServices: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    this.total = this._usuarioServices.total;
    //======= para ver el carrito
    this.cont = this._usuarioServices.contador;
    console.log("ESTO ES EL CONTADOR", this.cont);

    let bell = document.getElementById('notification');
    if (this._usuarioServices.contador != 0) {
      bell.setAttribute('data-count', (this._usuarioServices.contador).toString());
      bell.classList.add('show-count');
      bell.classList.add('notify');
      bell.addEventListener('animationend', () => {
        bell.classList.remove('notify');
      });
    }




    this.usuario = this._usuarioServices.usuario;
    this.correo = this.usuario.email;
    if (this.usuario._id.length > 3) {
      this.ocultarBoton = 'oculto';
    } else {

      this.ocultarPerfil = 'oculto';
    }




  }



  ingresar(forma: NgForm) {
    console.log("hola", forma.value)

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioServices.login(usuario).subscribe(correcto => {
      console.log(correcto);
      if (correcto) {
        swal('Bienvenido', '', 'success');
        this.ocultarBoton = "oculto";
        this.ocultarPerfil = "";

        console.log("usuario:", this._usuarioServices.usuario.email);

      }
    })
  }


  registrarse(forma: NgForm) {
    console.log("hola", forma.value)
    let usuario = new Usuario(forma.value.nombre,
      forma.value.email,
      forma.value.password,
      forma.value.telefono);
    this._usuarioServices.registrarse(usuario).subscribe(resp => {
      console.log("la respusta", resp);

    })

  }

  realizarCompra() {
    swal("Compra de servicio!", "Total del sercicio: " + this.total + " Bs.", "success");
    this._usuarioServices.total = 0;
    this._usuarioServices.servicios = null;
    this._usuarioServices.contador = 0;
    // this.router.navigate(['/carrito']);
    this.total = 0;
    this.cont = 0;

    let bell = document.getElementById('notification');

      bell.setAttribute('data-count', (this._usuarioServices.contador).toString());
      bell.classList.add('show-count');
      bell.classList.add('notify');
      bell.addEventListener('animationend', () => {
        bell.classList.remove('notify');
      });
    
  }



}
