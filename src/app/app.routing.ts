import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './website_compo/home/home.component';
import { LoginComponent } from './website_compo/login/login.component';
import { SignUpComponent } from './website_compo/sign-up/sign-up.component';
import { LoginForgotPasswordComponent } from './website_compo/login/login-forgot-password/login-forgot-password.component';
import { UpdatePasswordComponent } from './website_compo/login/update-password/update-password.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'SignUp', component: SignUpComponent},
  { path: 'forgotpassword', component : LoginForgotPasswordComponent},
  { path: 'updatePassword', component: UpdatePasswordComponent},
  { path: '', component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
   // { path: '**',              component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
