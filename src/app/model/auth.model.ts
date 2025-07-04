import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ShowForRolesDirective } from './directives/show-for-roles.directive';

@NgModule({
  declarations: [ ],
  imports: [CommonModule, ReactiveFormsModule, LoginPageComponent],
  exports: [LoginPageComponent],
})
export class AuthModule {}