import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { IndexComponent } from './index/index.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { PermisoRegistroComponent } from './permiso-registro/permiso-registro.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    IndexComponent,
    PerfilComponent,
    RecuperarContrasenaComponent,
    MenuComponent,
    PermisoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaV3Module,
    RecaptchaModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
