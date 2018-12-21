import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LeadRoutingModule} from "./lead-routing.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LeadComponent} from './component/lead.component';
import {AllLeadComponent} from './component/all-lead/all-lead.component';
import {NewLeadComponent} from './component/new-lead/new-lead.component';
import {SharedModule} from "../shared/shared.module";
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    LeadComponent,
    AllLeadComponent,
    NewLeadComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LeadRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class LeadModule {
}
