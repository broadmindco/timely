import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadComponent} from "./component/lead.component";
import {AllLeadComponent} from "./component/page/all-lead/all-lead.component";
import {NewLeadComponent} from "./component/page/new-lead/new-lead.component";
import {ShowLeadComponent} from "./component/page/show-lead/show-lead.component";
import {EditLeadComponent} from "./component/page/edit-lead/edit-lead.component";

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
        component: AllLeadComponent
      },
      {
        path: ':id',
        component: ShowLeadComponent
      },
      {
        path: ':id/edit',
        component: EditLeadComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LeadRoutingModule { }
