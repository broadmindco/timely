import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginComponent} from './component/login/login.component';
import {AuthComponent} from './component/auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    LoginComponent,
    AuthComponent
  ]
})
export class AuthModule { }
