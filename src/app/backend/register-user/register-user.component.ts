import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN','CLIENT'];
  defaultRole:string='CLIENT';
  isLoading: boolean = false;
  email!: string;
  code!: number;
  message!: string;
  countdown: number = 60;

  codeSent: boolean = false;
  codeFalse: boolean = false ;
  timerId: any;

  username!: string;
  password!: string;
  recipient!: string;
  subject!: string;
  body!: string;

  ngOnInit(): void {

  }
  constructor(private userService: UserService, private router: Router ,private http: HttpClient) { }

  register(F:NgForm) {
    this.isLoading = true;
    this.registerRequest.firstname=F.controls['firstname'].value;
    this.registerRequest.lastname=F.controls['lastname'].value;
    this.registerRequest.password=F.controls['password'].value;
    this.registerRequest.email=F.controls['email'].value;
    this.registerRequest.role = this.defaultRole;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
        this.router.navigate(['send-code']);

        this.isLoading = false;
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        this.isLoading = false;
      }
    );
  }

}





