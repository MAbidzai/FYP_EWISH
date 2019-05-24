import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../../../shared/services/appuser.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  UserPassword: string;
  ConfirmPassword: string;
  UserToken: string;

  constructor(private appUserService: AppUserService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    // console.log(this.UserPassword + '//' + this.ConfirmPassword + '//' + this.UserToken);
    this.appUserService.updatePassword(this.UserPassword, this.ConfirmPassword, this.UserToken)
    .subscribe(data => {
        if (data) {
          this.router.navigate(['/Login']);
        } else {
          console.log('Email not registered!');
        }
      });
  }

}
