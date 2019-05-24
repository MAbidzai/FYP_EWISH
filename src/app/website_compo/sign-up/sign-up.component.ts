import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppUserService } from '../../shared/services/appuser.service';
import { AppUser } from '../../shared/Models/AppUser';
import { uniqueUsernameValidator } from '../../shared/unique-username-validator.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  userModel = new AppUser;
  userForm: FormGroup;
  Sentflag: boolean;

  constructor(private appuserService: AppUserService,
    private fb: FormBuilder) { }

  onSubmit() {
    this.userModel = this.userForm.value;
    console.log(this.userModel);
    this.appuserService.enroll(this.userModel)
      .subscribe(data => {
        if (data) {
          this.Sentflag = true;
        } else {
          this.Sentflag = false;
        }
      });
  }

  ngOnInit() {
    this.createUserForm();
  }


  createUserForm() {
    this.userForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.maxLength(35)]],
        lastName: ['', [Validators.maxLength(35)]],
        userEmail: ['', [Validators.required]],
        userPassword: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
        gender: ['', [Validators.required]],
        dateOfBirth: [''],
        phoneMobile: [''],
        userName: ['', [Validators.minLength(6), Validators.required]]
        // userName: ['', [Validators.minLength(6), Validators.required], uniqueUsernameValidator(this.appuserService)]
      });
  }
  // get userName() {
  //   return this.userForm.get('userName');
  // }
}
