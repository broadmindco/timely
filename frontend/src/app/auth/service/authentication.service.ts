import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../dto/login-request";
import {LoginResponse} from "../dto/login-response";
import {Router} from "@angular/router";

interface AuthService {
  authenticate(loginRequest: LoginRequest): Promise<any>,
  isAuthenticated(): boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthService {

  private loginResponse: LoginResponse;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  async authenticate(loginRequest : LoginRequest) {

    if(this.loginResponse) {
      console.log("Cached loginResponse:");
      return this.loginResponse;
    }

    const options = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(loginRequest.email + ':' + loginRequest.password)
      }),
      withCredentials: true
    };

    try {
      const response = await this.http.get<LoginResponse>('/api/auth', options).toPromise();
      this.saveLoginResponse(response)
    } catch (e) {
      throw e;
    }

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
  private saveLoginResponse(loginResponse: LoginResponse) {
    localStorage.setItem('currentUser', JSON.stringify(loginResponse));
    this.loginResponse = loginResponse;
  }

}
