import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";
import {Observable} from "rxjs";

@Injectable()
export class IsAuthenticatedInterceptor implements HttpInterceptor {

  constructor(
    private authService : AuthenticationService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.authService.isAuthenticated()) {
      return next.handle(req);
    }
    const user = this.authService.getCurrentUser();
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'X-AUTH-TOKEN': user.sessionId
    });
    const request = req.clone({ headers: headers });
    return next.handle(request);
  }

}
