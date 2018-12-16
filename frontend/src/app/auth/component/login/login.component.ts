import {Component, OnInit} from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {LoginRequest} from "../../dto/login-request";
import {AuthenticationService} from "../../service/authentication.service";

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
   private authService: AuthenticationService
  ) {

  }

  ngOnInit() {

  }

  async login() {
    try {
      const session = await this.authService.authenticate(this.loginRequest);
      console.log(session)
    } catch (e) {
      console.log(e)
    } finally {
      this.loginRequest = new LoginRequest();
    }
  }

}
