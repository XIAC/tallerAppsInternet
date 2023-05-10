import { Component } from '@angular/core';
import { Producto } from './models/producto.model';
import { Persona, Usuario } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'tallerApps';
  nombre = 'Elver Becerra';
  resultado = 4 + 6;
  botonDeshabilitar = false;
  persona : Persona = {
    nombre: "Alan Ochoa",
    edad: 26
  }
  usuario : Usuario = {
    correo: "aaa@gmail.com",
    contrasena: "12312"
  }
  listaNombres : string [] = ['Jose', 'Elias','Nestor','Ernesto'];
  nuevoNombre = '';
  productos : Producto[] = [
    {nombre: 'Laptop DELL', precio: 4500, saldo:12321},
    {nombre: 'Laptop ASUS', precio: 5000},
    {nombre: 'Laptop Toshiba', precio: 3000}];
  accionBoton(){
    this.botonDeshabilitar = !this.botonDeshabilitar;
  }
  incrementarEdad(){
    this.persona.edad +=1 ;
  }
  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element);
  }
  cambiarNombre(event : Event){
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  }
  agregarPersona(){
    this.listaNombres.push(this.nuevoNombre);
  }
  eliminarPersona(index : number){
    this.listaNombres.splice(index, 1);
  }
  registrar(){
    console.log(this.usuario);
  }

}
