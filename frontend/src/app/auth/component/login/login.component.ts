import {Component, OnInit} from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {LoginRequest} from "../../dto/login-request";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;
  loginRequest = new LoginRequest();
  error: HttpErrorResponse = null;
  isLoading = false;

  constructor(
   private authService: AuthenticationService,
   private router: Router
  ) {

  }

  ngOnInit() {

  }

  login() {
    this.isLoading = true;
    this.authService.authenticate(this.loginRequest).subscribe(
      data => {
        this.authService.saveLoginResponse(data);
        this.router.navigate(['leads'])
      },
      error => this.error = error,
      () => this.isLoading = false
    );

  }

}
