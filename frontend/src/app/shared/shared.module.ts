import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    NavbarComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
