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
import { ShowLeadComponent } from './component/show-lead/show-lead.component';
import { EditLeadComponent } from './component/edit-lead/edit-lead.component';
import { LeadMenuComponent } from './component/lead-menu/lead-menu.component';

@NgModule({
  declarations: [
    LeadComponent,
    AllLeadComponent,
    NewLeadComponent,
    ShowLeadComponent,
    EditLeadComponent,
    LeadMenuComponent
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
