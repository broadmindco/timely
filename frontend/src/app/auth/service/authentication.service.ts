import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {LoginRequest} from "../dto/login-request";

interface AuthService {
  authenticate(loginRequest: LoginRequest): Promise<any>
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthService {

  constructor(
    private http: HttpClient
  ) {

  }

  async authenticate(loginRequest : LoginRequest) {

    const options : any = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(loginRequest.email + ':' + loginRequest.password)
      }),
      withCredentials: true
    };

    try {
      const response = await this.http.get('/api/auth', options).toPromise();
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    } finally {

    }
  }

}
