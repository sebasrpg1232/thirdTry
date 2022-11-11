import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-permiso-registro',
  templateUrl: './permiso-registro.component.html',
  styleUrls: ['./permiso-registro.component.css']
})
export class PermisoRegistroComponent implements OnInit {
  algo = "Ingresar documento o correo electrónico";
  goToRegister() {
    this.router.navigate(['registrar']);
  }
  validation() {
    let desition = (<HTMLInputElement>document.getElementById("documento")).value;
    if (desition == "Ingresar documento o correo electrónico") {
      this.algo = "debe registrar algo";
    }else{
      this.algo = "";
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
