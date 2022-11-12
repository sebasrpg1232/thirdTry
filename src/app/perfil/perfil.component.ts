import { Component, Input, OnInit } from '@angular/core';
import { iDriver } from '../data/iDriver';
import { MoveDataService } from '../data/move-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(private data: MoveDataService) {}
  driver!: iDriver;
  nombre = '';
  documento = '';
  correo = '';
  direccion = '';
  telefono = '';

  ngOnInit(): void {
    this.correo = this.data.getDriver().driverEmail;
    this.nombre = this.data.getDriver().driverName;
    this.direccion = this.data.getDriver().driverDirection;
    this.telefono = this.data.getDriver().driverNumber.toString();
  }
}
