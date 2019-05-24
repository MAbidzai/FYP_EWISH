import { Directive } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { AppUserService } from './services/appuser.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export function uniqueUsernameValidator(appUserService: AppUserService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return appUserService.getByUserName(c.value).pipe (
      map(users => {
        return users && users.length > 0 ? { 'uniqueUsername': true } : null;
      })
    );
  };
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[UniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true}]
})
export class UniqueUsernameValidatorDirective {

  constructor(private appUserService: AppUserService) { }

}
