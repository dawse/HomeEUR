import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


interface User {
  roles: string[];
  jti: string;
  sub: string;
  iat: number;
  exp: number;
}
interface AuthenticationResponse {
  token: string;
}
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  email!: string;
  password!: string;
  role!: string;

  constructor(
    private userService: UserService,
    private router: Router) {}

  onSubmit() {

    const request = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      (response: AuthenticationResponse) => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);

        // Rediriger l'utilisateur en fonction de son rôle
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        const role = user.roles[0];
        console.log(user);
        localStorage.setItem('emailUser', user.jti);

        console.log(role);

        if (role === 'Client') {

          this.router.navigate(['user/Client']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['admin']);
        } else if (role === 'CLIENT') {
          this.router.navigate(['Client/list']);
        }
        else {
          console.error('Unknown role:', role);
        }
      },
      error => {
        alert("Please check your account, password, or email.")
        console.error(error);
      }
    );
  }


  redirectToForgot() {
    console.log("ok");
    this.router.navigate(['forget-pwd']);
  }


}
