import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverServiceService } from '../data/driver-service.service';
import { iDriver } from '../data/iDriver';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  constructor(private router:Router, private driverService: DriverServiceService) {}
  
  goToIndex(){
    this.router.navigate(['']);
  }
  createADriver(){
    var driver: iDriver = {
      driverName: (<HTMLInputElement>document.getElementById("nombre")).value,
      driverId: 0,
      driverEmail: (<HTMLInputElement>document.getElementById("correo")).value,
      driverDirection: (<HTMLInputElement>document.getElementById("direccion")).value,
      driverNumber: parseInt((<HTMLInputElement>document.getElementById("numero")).value),
      driverPassword: (<HTMLInputElement>document.getElementById("contraseña")).value
    }
    console.log((<HTMLInputElement>document.getElementById("nombre")).value);
    
    /* 
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    var numero = (<HTMLInputElement>document.getElementById("numero")).value; */
    this.driverService.postDriver(driver)
    .subscribe({
      next: (iDriver) =>{
        console.log(iDriver);
      }
    });
  }

  ngOnInit(): void {}
}
