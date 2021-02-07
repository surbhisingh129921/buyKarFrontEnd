import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService  implements HttpInterceptor{

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'angular'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.isAuthenticatedUser();

    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
  }
    return next.handle(request);
  }
}
