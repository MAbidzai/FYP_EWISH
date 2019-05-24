import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OauthToken} from '../../shared/Models/oauthToken';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AppUser} from '../../shared/Models/AppUser';
import {environment} from '../../../environments/environment';


const GET_OAUTH_TOKEN_URI: string = environment.API_URL + '/oauth/token';
const VALIDATE_APPUSERS_URI: string = environment.API_URL + '/appuser/validateappuser';
const CLIENT_ID_UNSERNAME: string = environment.CLIENT_ID_UNSERNAME;
const CLIENT_SECRET_PASSWORD: string = environment.CLIENT_SECRET_PASSWORD;
const GRANT_TYPE: string = environment.GRANT_TYPE;



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  public loggedIn;

  constructor(private http: HttpClient) {
  }


  // App User Authorization
  getOAuthToken(userName: string, userPassword: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let params = new URLSearchParams();
    params.append('username', userName);
    params.append('password', userPassword);
    params.append('grant_type', GRANT_TYPE);

    // tslint:disable-next-line:prefer-const
    let basicToken: string = btoa(CLIENT_ID_UNSERNAME + ':' + CLIENT_SECRET_PASSWORD);

    // tslint:disable-next-line:prefer-const
    let httpOptions = {
      headers: new HttpHeaders({
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': 'Basic ' + basicToken,
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      })
    };

    // console.log(`getOAuthToken.params ` + params.toString());
    // console.log(`getOAuthToken.params ` + httpOptions.toString());

    return this.http.post<OauthToken>(GET_OAUTH_TOKEN_URI, params.toString(), httpOptions)
      .pipe(
        tap(_ => {
          console.log(`OAuth Token Successfully retrieved`);
        }),
        catchError(this.handleError('getOAuthToken', '')) // then handle the error
      );
  }

  // App User Authorization
  getAppUsersValidation(userName: string, userPassword: string): Observable<any> {
    const url = VALIDATE_APPUSERS_URI + `/${userName}/${userPassword}`;
    return this.http.get<AppUser>(url)
      .pipe(
        tap(_ => {
          console.log(`User successfully Loggedin`);
        }),
        catchError(this.handleError('getAppUsersValidation', '')) // then handle the error
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
