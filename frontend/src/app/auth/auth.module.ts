import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginComponent} from './component/login/login.component';
import {AuthComponent} from './component/auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {IsAuthenticatedInterceptor} from "./interceptor/is-authenticated.interceptor";
import {IsNotAuthenticatedInterceptor} from "./interceptor/is-not-authenticated.interceptor";

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IsAuthenticatedInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IsNotAuthenticatedInterceptor,
      multi: true
    },
  ],
  bootstrap: []
})
export class AuthModule { }
