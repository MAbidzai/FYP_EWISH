import { Injectable } from '@angular/core';
import { AppUser } from '../../shared/Models/AppUser';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  // tslint:disable-next-line:variable-name
  create = 'https://vdocqaapi.dochub.ie/registration/signup-me';
  GET_APPUSERS_URI = environment.API_URL + '/appuser/appusers';
  GET_FORGOTPASSWORD_URI = environment.API_URL + '/registration/user/forget-password';
  POST_UPDATEPASSWORD_URI = environment.API_URL + '/registration/user/forget_password_update';
  GET_APPUSER_BY_USERNAME_URI: string = environment.API_URL + '/appuser';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }


  //         ******* Create New account ********

  enroll(user: AppUser) {
    console.log(user);
    return this._http.post<any>(this.create, user, httpOptions)
      // tslint:disable-next-line:align
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  //         ******* Get App user List ********

  getAllAppUsersList() {
    return this._http.get<AppUser[]>(this.GET_APPUSERS_URI)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }


  //         ******* Get AppUser By User Name********
  getByUserName(UserName: any) {
    console.log(UserName);
    const url = this.GET_APPUSER_BY_USERNAME_URI + `/${UserName}`;
    return this._http.get<any>(url, httpOptions);

    //      Just For demo purpose
    // const url2 = 'https://jsonplaceholder.typicode.com/users?username=';
    // const ulr = url2 + `${UserName}`;
    // return this.http.get<any>(ulr);
  }


  //         ******* Send Verfication Email ********

  // tslint:disable-next-line:ban-types
  forgotPassword(email: String) {
    console.log(email);
    const url1 = this.GET_FORGOTPASSWORD_URI + '?email=' + `${email}`;
    return this._http.get<any>(url1)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  //         ******* Update Password ********

  updatePassword(password: string, confirmPassword: string, token: string) {
    // console.log(password + '//' + confirmPassword + '//' + token);
    // tslint:disable-next-line:max-line-length
    const url2 = this.POST_UPDATEPASSWORD_URI + '?newPassword=' + `${password}` + '&oldPassword=' + `${confirmPassword}` + '&token=' + `${token}`;
    return this._http.post<any>(url2, httpOptions)
      // tslint:disable-next-line:align
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  //        ******* Error Handler ********

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

