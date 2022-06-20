import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>,
    next: HttpHandler):
    Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthService);
    const token = auth.getToken
    if (token) {
      const authReq = req.clone({headers: req.headers.set("Authorization", `Bearer ${token}`)});
      return next.handle(authReq)
    }
    return next.handle(req);
  }
}





