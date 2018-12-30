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
import { LeadGeneralFormComponent } from './component/widget/lead-general-form/lead-general-form.component';
import { LeadAddressFormComponent } from './component/widget/lead-address-form/lead-address-form.component';
import { LeadSocialFormComponent } from './component/widget/lead-social-form/lead-social-form.component';

@NgModule({
  declarations: [
    LeadComponent,
    AllLeadComponent,
    NewLeadComponent,
    ShowLeadComponent,
    EditLeadComponent,
    LeadMenuComponent,
    LeadGeneralFormComponent,
    LeadAddressFormComponent,
    LeadSocialFormComponent
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
