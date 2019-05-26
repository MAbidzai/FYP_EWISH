import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HttpRequestHeaderInterceptor } from './shared/interceptors/HttpRequestHeaderInterceptor';
import { ErrorHandler } from './shared/ErrorHandler/ErrorHandler';
import { AppUserService } from './shared/services/appuser.service';
import { LoginComponent } from './website_compo/login/login.component';
import { UpdatePasswordComponent } from './website_compo/login/update-password/update-password.component';
import { LoginForgotPasswordComponent } from './website_compo/login/login-forgot-password/login-forgot-password.component';
import { HomeComponent } from './website_compo/home/home.component';
import { SignUpComponent } from './website_compo/sign-up/sign-up.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ListForGuestComponent } from './website_compo/list-for-guest/list-for-guest.component';
import { FindListDialogComponent } from './shared/find-list-dialog/find-list-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    LoginForgotPasswordComponent,
    UpdatePasswordComponent,
    UserLayoutComponent,
    ConfirmDialogComponent,
    ListForGuestComponent,
    FindListDialogComponent
  ],
  providers: [AppUserService,
    ErrorHandler,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestHeaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, FindListDialogComponent]

})
export class AppModule { }
