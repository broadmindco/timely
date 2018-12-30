import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {LeadModule} from "./lead/lead.module";
import {LeadRoutingModule} from "./lead/lead-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    LeadModule,
    LeadRoutingModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
