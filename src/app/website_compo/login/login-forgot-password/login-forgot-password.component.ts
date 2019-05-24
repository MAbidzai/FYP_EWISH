import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../../shared/services/appuser.service';

@Component({
  selector: 'app-login-forgot-password',
  templateUrl: './login-forgot-password.component.html',
  styleUrls: ['./login-forgot-password.component.css']
})
export class LoginForgotPasswordComponent implements OnInit {

  UserEmail: string;

  constructor(private appUserService: AppUserService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.UserEmail);
    this.appUserService.forgotPassword(this.UserEmail)
    .subscribe(data => {
        if (data === 'success') {
          this.router.navigate(['/updatePassword']);
        } else {
          console.log('Email not registered!');
        }
      });
  }

}
