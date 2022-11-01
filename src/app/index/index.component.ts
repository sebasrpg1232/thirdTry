import { Component, OnInit,AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//pendiente de esto

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  guardarDatos() {
    let sebas = (<HTMLInputElement>document.getElementById("documento")).value;
    console.log(sebas);
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
  }

}
