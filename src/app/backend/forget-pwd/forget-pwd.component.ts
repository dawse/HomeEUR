import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent {
  email = '';
  message = '';
  isLoading: boolean = false;


  constructor(private passwordService: UserService,private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    this.passwordService.forgotPassword(this.email).subscribe(
      response => {
        this.message = 'Password reset email sent';
        console.log(this.message);
        this.isLoading = false;
      },
      (error) => {this.message = error.error;
        this.isLoading = false;}
    );
  }
}
