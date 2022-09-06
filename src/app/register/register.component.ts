import { Component, OnInit } from '@angular/core';
import { AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    pseudo: null,
    nom: null,
    prenom: null,
    email: null,
    telephone: null,
    rue: null,
    codePostal: null,
    ville: null,
    motDePasse: null
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {pseudo, nom, prenom, email, telephone,rue, codePostal, ville, motDePasse } = this.form;
    this.authService.register(pseudo, nom, prenom, email, telephone, rue, codePostal, ville, motDePasse).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
