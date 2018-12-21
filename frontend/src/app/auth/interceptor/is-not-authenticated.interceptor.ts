import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class IsNotAuthenticatedInterceptor implements HttpInterceptor {

  constructor(
    private authService : AuthenticationService
  ){}

  private handleHttpError(error) {
    if (error instanceof HttpErrorResponse) {
      if(error.status === 502 || error.status === 503){

      }

      if (error.status === 401 || error.status === 0) {
        this.authService.logout();
      }
    }

    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => this.handleHttpError(err))
    );
  }

}
