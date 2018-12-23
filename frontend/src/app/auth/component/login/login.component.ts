import {Component, OnInit} from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {LoginRequest} from "../../dto/login-request";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;
  loginRequest = new LoginRequest();

  constructor(
   private authService: AuthenticationService,
   private router: Router
  ) {

  }

  ngOnInit() {

  }

  async login() {
    const user = await this.authService.authenticate(this.loginRequest);
    this.router.navigate(['leads']);
  }

}
