import { EndpointsService } from './services/endpoints.service';
import { AuthService } from 'src/app/services/auth.service';
import { UnAuthGuardService } from './guards/unauth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './web/auth/auth.component';
import { PageComponent } from './web/page/page.component';
import { LoginComponent } from './web/auth/login/login.component';
import { RegisterComponent } from './web/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './guards/auth-guard.service';
import { GlobalService } from './services/global.service';
import { PageService } from './services/page.service';


//เพิ่มของมอส
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TemplateAComponent } from './web/page/template/template-a/template-a.component';
import { TemplateBComponent } from './web/page/template/template-b/template-b.component';
import { NavbarUploadComponent } from './web/page/navbar-upload/navbar-upload.component';
import { SendComponent } from './web/page/send/send.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PageComponent,
    LoginComponent,
    RegisterComponent,
    TemplateAComponent,
    TemplateBComponent,
    NavbarUploadComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //เพิ่มของมอส
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    FormsModule
  
    
  ],
  providers: [
    CookieService,
    AuthGuardService,
    UnAuthGuardService,
    AuthService,
    EndpointsService,
    GlobalService,
    PageService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
