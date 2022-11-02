import { Component, OnInit,AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DriverServiceService } from '../data/driver-service.service';
import { iDriver } from '../data/iDriver';
//pendiente de esto

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  drivers!: any[];

  driver: iDriver = {
    driverName: '',
    driverId: 0,
    driverDirection: '',
    driverNumber: 0,
    driverEmail: ''
  };

  constructor(private router: Router,
    private driverService: DriverServiceService,
    ) { }

  guardarDatos() {
    let documento = (<HTMLInputElement>document.getElementById("documento")).value;
    let contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;
    console.log(documento);
    console.log(contrasena);
  }
  goToProfile() {
    this.router.navigate(['perfil']);
  }

  goToChangePassword() {
    this.router.navigate(['recuperarContraseña']);
  }
  goToChangeRegister() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
    console.log('Buscando el drivers ');
    this.driverService.GetDriver().then((response: any) => {
      console.log('response', response);
      this.drivers = response;      
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     
  }

}
