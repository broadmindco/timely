import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './component/login/login.component';
import { AuthComponent } from './component/auth.component';
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    LoginComponent,
    AuthComponent
  ]
})
export class AuthModule { }
