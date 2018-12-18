import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {LoginRequest} from "../dto/login-request";
import {LoginResponse} from "../dto/login-response";

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
    private http: HttpClient
  ) {

  }

  async authenticate(loginRequest : LoginRequest) {

    if(this.loginResponse) {
      console.log("Cached loginResponse:");
      return this.loginResponse;
    }

    const options : any = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(loginRequest.email + ':' + loginRequest.password)
      }),
      withCredentials: true
    };

    try {
      this.loginResponse = await this.http.get<LoginResponse>('/api/auth', options).subscribe();
      return this.loginResponse;
    } catch (e) {
      throw e;
    }

  }

  isAuthenticated(): boolean {
    return this.loginResponse !== null;
  }

}
