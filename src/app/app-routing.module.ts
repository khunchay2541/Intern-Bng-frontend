import {PageComponent} from './web/page/page.component'

import { UnAuthGuardService } from './guards/unauth-guard.service'
import { RegisterComponent } from './web/auth/register/register.component';
import { LoginComponent } from './web/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './web/auth/auth.component';
import { AuthGuardService } from './guards/auth-guard.service';

import {TemplateAComponent} from './web/page/template/template-a/template-a.component'
import {TemplateBComponent} from './web/page/template/template-b/template-b.component'
import {SendComponent} from './web/page/send/send.component'

const routes: Routes = [

  {
    path: '',
    component: AuthComponent,
    canActivate: [UnAuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'page',
    component: PageComponent,
    canActivate: [AuthGuardService],
    
  },
  {
    path:'tempA',
    canActivate: [AuthGuardService],
    component:TemplateAComponent
  },
  {
    path:'tempB',
    canActivate: [AuthGuardService],
    component:TemplateBComponent
  },
  {
    path:'send',
    canActivate: [AuthGuardService],
    component:SendComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
