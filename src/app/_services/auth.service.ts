import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  login(pseudo: string, motDePasse: string): Observable<any>{
    return this.http.post(AUTH_API + 'signin',{
      pseudo,
      motDePasse
    }, httpOptions);
  }
  register(pseudo: string, nom: string, prenom: string, email: string, telephone: number, rue:string, codePostal:number, ville:string, motDePasse: string): Observable<any> {
    return this.http.post(AUTH_API + 'sinup', {
      pseudo,
      nom,
      prenom,
      email,
      telephone,
      rue,
      codePostal,
      ville,
      motDePasse
    }, httpOptions);
  }
}

