import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadComponent} from "./component/lead.component";
import {AllLeadComponent} from "./component/all-lead/all-lead.component";
import {NewLeadComponent} from "./component/new-lead/new-lead.component";
import {AllLeadsResolverService} from "./resolver/all-leads-resolver.service";
import {ShowLeadComponent} from "./component/show-lead/show-lead.component";
import {EditLeadComponent} from "./component/edit-lead/edit-lead.component";
import {LeadResolverService} from "./resolver/lead-resolver.service";

const routes: Routes = [
  {
    path: 'leads',
    canActivate: [],
    canActivateChild : [],
    component: LeadComponent,
    children: [
      {
        path: 'new',
        component: NewLeadComponent
      },
      {
        path: '',
        component: AllLeadComponent,
        resolve: { leads: AllLeadsResolverService },
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ShowLeadComponent,
        resolve: { lead: LeadResolverService },
      },
      {
        path: ':id/edit',
        component: EditLeadComponent,
        resolve: { lead: LeadResolverService }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LeadRoutingModule { }
