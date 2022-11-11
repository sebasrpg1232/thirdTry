import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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
  drivers: iDriver[] = [];
  conductor!: iDriver;
  /* iDriver: iDriver = {
    driverName: '',
    driverId: 0,
    driverDirection: '',
    driverNumber: 0,
    driverEmail: '',
    driverPassword: ''
  }; */

  constructor(private router: Router,
    private driverService: DriverServiceService,
  ) {



   }

  guardarDatos() {
    //let documento = (<HTMLInputElement>document.getElementById("documento")).value;
    // aqui iria los datos que se comparan en la bddlet contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;

  }

  

  validarDatos(documento = (<HTMLInputElement>document.getElementById("documento")).value,
    contraseña = (<HTMLInputElement>document.getElementById("contrasena")).value) {
      
  }


  goToProfile() {
    this.router.navigate(['perfil']);
  }

  goToChangePassword() {
    this.router.navigate(['recuperarContraseña']);
  }
  goToChangeRegister() {
    this.router.navigate(['registrar']);
  }

  ngOnInit(): void {
    console.log('Buscando el drivers ');
/*     this.driverService.GetDriver().subscribe(response => {
      console.log('response', response);
      this.drivers = response.data;
    }) */

    this.driverService.GetDriver().subscribe({
next: drivers =>{
  let dato: string = JSON.stringify(drivers).replace('[', '').replace(']','');
  let json = JSON.parse(dato);
  console.log(json);
  this.conductor = json;
  console.log(this.conductor.driverDirection);
  this.drivers = drivers;
  console.log(JSON.stringify(drivers).replace('[', '').replace(']',''));
}
    })

    console.log(this.drivers);
    

  }

}
