import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterUserComponent} from "./backend/register-user/register-user.component";
import {SendCodeComponent} from "./backend/send-code/send-code.component";
import {AuthenticationComponent} from "./backend/authentication/authentication.component";
import {ForgetPwdComponent} from "./backend/forget-pwd/forget-pwd.component";
import {AddForumComponent} from "./components/forum/add-forum/AddForumComponent";
import {GetallforumComponent} from "./components/forum/getallforum/getallforum.component";
import {TemplateComponent} from "./components/template/template.component";


const routes: Routes = [

  {
    path: 'register',
    component: RegisterUserComponent,

  },
  {
    path: 'send-code', component:SendCodeComponent,},
  {
    path: 'authenticate',
    component: AuthenticationComponent,

  },
  {
    path: 'forget-pwd',
    component: ForgetPwdComponent,

  },
  { path: 'template', component: TemplateComponent },
  {path:'addpost',component : AddForumComponent},
  {path:'getall' , component:GetallforumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
