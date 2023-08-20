import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(usuario: string, senha: string) {
    let body = {
      usernameOrEmail: usuario,
      senha: senha,
    };

    return this.httpClient
      .post(`${environment.BASE_URL}/Login`, body)
      .subscribe(
        (response: any) => {
          const token = response.token;
          localStorage.setItem('token', token);

          this.router.navigate(['acompanhamento-orcamentario']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  cadastro(usuario: string, email: string, senha: string) {
    let body = {
      userName: usuario,
      email: email,
      password: senha,
    };

    return this.httpClient.post(
      `${environment.BASE_URL}/Usuario/Adicionar`,
      body
    );
  }
}
