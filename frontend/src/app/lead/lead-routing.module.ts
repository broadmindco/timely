import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadComponent} from "./component/lead.component";
import {AllLeadComponent} from "./component/all-lead/all-lead.component";
import {NewLeadComponent} from "./component/new-lead/new-lead.component";
import {LeadResolverService} from "./resolver/lead-resolver.service";

const routes: Routes = [
  {
    path: 'leads',
    canActivate: [],
    canActivateChild : [],
    component: LeadComponent,
    children: [
      {
        path: 'all',
        component: AllLeadComponent,
        resolve: {
          leads: LeadResolverService
        }
      },
      {
        path: 'new',
        component: NewLeadComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
