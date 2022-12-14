import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {
  captcha!: string;
  email!: string;
  constructor(private recaptchaV3Service: ReCaptchaV3Service, private router: Router) {
    this.captcha = "";
    this.email = "secretemail@gmail.com";
  }

  goToIndex() {
    this.router.navigate(['']);
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
      });
  }

  ngOnInit(): void {
  }
  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log("resolve captcha with response: " + this.captcha);
  }
}
