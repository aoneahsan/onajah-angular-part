import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guard/auth-guard-service';
import { UnAuthGuardService } from './guard/unauth-guard-service';

import { HomeComponent } from './component/home/home.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { ProfileComponent } from './component/user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [UnAuthGuardService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [UnAuthGuardService]
  },
  {
    path: 'user/:username',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
