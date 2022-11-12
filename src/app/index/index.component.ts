import { HttpParams } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DriverServiceService } from '../data/driver-service.service';
import { iDriver } from '../data/iDriver';
import { MoveDataService } from '../data/move-data.service';
//pendiente de esto

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  drivers: iDriver[] = [];
  validDriver!: iDriver;
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
    private data: MoveDataService
  ) {



   }

  guardarDatos() {
    //let documento = (<HTMLInputElement>document.getElementById("documento")).value;
    // aqui iria los datos que se comparan en la bddlet contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;

  }

  

  validarDatos() {
      /* var validDriver: iDriver; */
     var correo = (<HTMLInputElement>document.getElementById("correo")).value;
     var contraseña = (<HTMLInputElement>document.getElementById("contrasena")).value;
      var sw: boolean = false; 
      this.drivers.forEach(driver => {
        if(driver.driverEmail == correo && driver.driverPassword == contraseña){
          this.validDriver = driver;
          sw = true;
        }
      });
      if(sw){
        console.log(this.validDriver);
        /* this.router.navigate(['perfil'],{queryParams: {try: this.validDriver.driverId}}); */
        this.data.addDriver(this.validDriver);
        this.router.navigate(['perfil']);
      }
  }


  goToProfile() {
   /*  let documento:number = parseInt((<HTMLInputElement>document.getElementById("documento")).value);
    let contraseña = (<HTMLInputElement>document.getElementById("contrasena")).value;
    this.driverService.GetOneDriver(documento).subscribe({
      next: driver =>{
        let dato: string = JSON.stringify(driver).replace('[', '').replace(']','');
        let json = JSON.parse(dato);
        this.conductor = json;
        console.log(json); 
        this.dri = driver;
      }
          });
          let dato: string = JSON.stringify(this.dri).replace('[', '').replace(']','');
          let json = JSON.parse(dato);
          this.conductor = json;
          console.log(json);  */
    //this.router.navigate(['perfil']);
  }

  goToChangePassword() {
    this.router.navigate(['recuperarContraseña']);
  }
  goToChangeRegister() {
    this.router.navigate(['registrar']);
  }
goToPermisionRegister(){
  this.router.navigate(['permisoRegistrar']);
}
  ngOnInit(): void {
    console.log('Buscando el drivers ');
    this.driverService.getAllDrivers().subscribe({
      next: (iDrivers) =>{
        this.drivers = iDrivers;
        console.log(iDrivers);
      },
      error: (Response) =>{
        console.log(Response);
      }
    })





/*     this.driverService.GetDriver().subscribe(response => {
      console.log('response', response);
      this.drivers = response.data;
    }) */

   /*  this.driverService.GetDrivers().subscribe({
next: drivers =>{
  let dato: string = JSON.stringify(drivers).replace('[', '').replace(']','');
  let json = JSON.parse(dato);
  console.log(json);
  this.conductor = json;
  console.log(this.conductor.driverDirection);
  this.drivers = drivers;
  console.log(JSON.stringify(drivers).replace('[', '').replace(']',''));
}
    }) */

    console.log(this.drivers);
    

  }

}
