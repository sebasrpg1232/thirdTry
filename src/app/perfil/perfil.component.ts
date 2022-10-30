import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor() {}
  nombre = "";
  documento = "";
  correo = "";
  direccion = "";
  telefono = "";
  
  sendValues(){
  this.nombre = "Carlos Enrique Guillent Carruyo";
  this.documento = "757878";
  this.correo = "carlosguillent@algo.com";
  this.direccion = "Maracaibo-Haticos, Calle 1000b #35y-44 ";
  this.telefono = "3224599592";
  console.log(this.nombre);
  
  }
  ngOnInit(): void {}
}
