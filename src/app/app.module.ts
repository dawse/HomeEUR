import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendCodeComponent } from './backend/send-code/send-code.component';
import { RegisterUserComponent } from './backend/register-user/register-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AuthenticationComponent } from './backend/authentication/authentication.component';
import { ForgetPwdComponent } from './backend/forget-pwd/forget-pwd.component';
import {TemplateComponent} from "./components/template/template.component";
import {AddForumComponent} from "./components/forum/add-forum/AddForumComponent";
import {GetallforumComponent} from "./components/forum/getallforum/getallforum.component";

@NgModule({

  declarations: [
    AppComponent,
    SendCodeComponent,
    RegisterUserComponent,
    AuthenticationComponent,
    ForgetPwdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
