import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../dto/login-request";
import {LoginResponse} from "../dto/login-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginResponse: LoginResponse;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  authenticate(loginRequest : LoginRequest) {

    const options = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(loginRequest.email + ':' + loginRequest.password)
      }),
      withCredentials: true
    };

    return this.http.get<LoginResponse>('/api/auth', options);

  }

  isAuthenticated(): boolean {
    if (this.loginResponse !== null && this.loginResponse !== undefined) {
      return true;
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user !== null && user !== undefined) {
      this.loginResponse = user;
      return true;
    }

    return false;
  }

  getCurrentUser() {
    return this.loginResponse;
  }

  logout() {
    this.loginResponse = null;
    localStorage.clear();
    return this.router.navigate(["auth", "login"]);
  }

  saveLoginResponse(loginResponse: LoginResponse) {
    localStorage.setItem('currentUser', JSON.stringify(loginResponse));
    this.loginResponse = loginResponse;
  }

}
