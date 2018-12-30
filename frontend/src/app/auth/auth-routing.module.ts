import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/page/login/login.component";
import {AuthComponent} from "./component/auth.component";

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [],
    canActivateChild : [],
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
