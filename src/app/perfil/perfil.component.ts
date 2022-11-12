import { Component, Input, OnInit } from '@angular/core';
import { iDriver } from '../data/iDriver';
import { MoveDataService } from '../data/move-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(private data: MoveDataService) { }
  driver!: iDriver;
  nombre = "";
  documento = "";
  correo = "";
  direccion = "";
  telefono = "";

  sendValues() {
    this.nombre = "Carlos Enrique Guillent Carruyo";
    this.documento = "757878";
    this.correo = "carlosguillent@algo.com";
    this.direccion = "Maracaibo-Haticos, Calle 1000b #35y-44 ";
    this.telefono = "3224599592";
  }
  ngOnInit(): void { 
    
    console.log(this.data.getDriver());
  }
}
