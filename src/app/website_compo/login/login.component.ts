// tslint:disable-next-line:no-reference
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OauthToken} from '../../shared/Models/oauthToken';
import { AppUser } from '../../shared/Models/AppUser';
import { AuthService } from '../../shared/services/auth.service'; // Services
import { AppUserService } from '../../shared/services/appuser.service'; // Services
import { HttpClient } from '@angular/common/http';
import { ifError } from 'assert';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  appuser: AppUser;
  userNameEmpty = false;
  userPasswordEmpty = false;
  userLoginInvalid = false;
  loginUserName: string;
  loginUserPassword: string;
  loginUserInactive = false;
  loginUserExpired = false;
  loginUserFailed = false;
  loginUserInactiveExpired = false;
  currentDate = new Date();
  appVersion = environment.APPVERSION;
  appName = environment.APPNAME;

  // loggedUserData:any;


  constructor(public router: Router, private authSnv: AuthService,
              private appUserService: AppUserService) {
  }

  ngOnInit() {
  }

  onLoggedin() {

    console.log(this.loginUserName + ' ' +  this.loginUserPassword);

    this.authSnv.getOAuthToken(this.loginUserName, this.loginUserPassword)
      .subscribe(
        oAuthToken => {
          if (oAuthToken) {
            localStorage.setItem('24doc-token', JSON.stringify(oAuthToken));
            console.log(`User successfully Loggedin` + oAuthToken.access_token);

            this.authSnv.getAppUsersValidation(this.loginUserName, this.loginUserPassword)
              .subscribe(resData => {
                if (resData) {
                  if (resData.active === 'N' || resData.expiryDate <= this.currentDate) {
                    // if User is Inactive
                    if (resData.active === 'N') {
                      this.loginUserInactive = true;
                    }
                    // if User is Expired
                    if (resData.expiryDate <= this.currentDate) {
                      this.loginUserExpired = true;
                    }
                    // if User is Expired & Inactive
                    if (resData.active === 'N' && resData.expiryDate <= this.currentDate) {
                      this.loginUserInactive = false;
                      this.loginUserExpired = false;
                      this.loginUserInactiveExpired = true;
                    }
                  } else {
                    // else "User successfully Loggedin"
                    this.loginUserIsTrue(resData);
                  }
                } else {
                  this.loginUserFailed = true;
                }
              });


          } else {
            this.loginUserFailed = true;
          }
        }
      );

  }


  loginUserIsTrue(data: AppUser) {

    // call the appuser service
    this.appUserService.getAllAppUsersList().subscribe(appUserDataList => {
      // this.appUserDataList = appUserDataList;
      console.log(appUserDataList);
      this.router.navigate(['/dashboard']);
      // get the userId from the appUsers List
      // tslint:disable-next-line:prefer-const
      for (let appUser1 of appUserDataList) {
        if (data.appUserId === appUser1.appUserId) {
          data = appUser1;
          console.log(data);
        }
      }
    });

    // localStorage.setItem('isLoggedin', 'true'); // need to remove

    // // Navigate to dashboard according to profile status -- Started --
    // if (data.userProfile === '1' || data.userProfile === '2') {
    //   console.log(' DASH BORAD');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   console.log('DOCTOR DASH BORAD');
    //   this.router.navigate(['/doc-dashboard']);
    // }
    // // Navigate to dashboard according to profile status -- Ended --
  }
}
