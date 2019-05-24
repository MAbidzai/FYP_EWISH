import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { OauthToken } from '../Models/oauthToken';
import { ErrorHandler } from '../../shared/ErrorHandler/ErrorHandler';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class HttpRequestHeaderInterceptor implements HttpInterceptor {

  constructor(
    public errorHandler: ErrorHandler,
  ) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('HttpRequestHeaderInterceptor Request: ' + JSON.stringify(req));

    // get the token from a service
    let oauthToken: OauthToken;
    oauthToken = JSON.parse(localStorage.getItem('24doc-token'));

    // add it if we have one
    if (oauthToken) {
      console.log('HttpRequestHeaderInterceptor token Value==> ' + oauthToken.access_token);
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + oauthToken.access_token) });
    }

    // if this is a login-request the header is
    // already set to x/www/formurl/encoded.
    // so if we already have a content-type, do not
    // set it, but if we don't have one, set it to
    // default --> json
    if (!req.headers.has('Content-Type')) {
      console.log('HttpRequestHeaderInterceptor IF req.headers.has(Content-Type)');
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    console.log('HttpRequestHeaderInterceptor Content-Type ' + req.headers.get('Content-Type'));

    if (!req.headers.has('Accept')) {
      // console.log("HttpRequestHeaderInterceptor IF req.headers.has('Accept)");
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    }
    // setting the accept header

    // return next.handle(req);
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
    }, (err: any) => {
      console.log(err.status);
      if (err instanceof HttpErrorResponse && err.status != 404) {
        this.errorHandler.handleError(err);
      }
    }));
  }
}
