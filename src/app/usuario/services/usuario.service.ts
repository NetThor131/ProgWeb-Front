import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  apiUrl: string = `${environment.BASE_URL}/Login`;

  constructor(private httpClient: HttpClient) {}

  login(usuario: string, senha: string) {
    let body = {
      usernameOrEmail: usuario,
      senha: senha,
    };

    return this.httpClient
      .post(this.apiUrl, body)
      .subscribe((response: any) => {
        const token = response.token;
        localStorage.setItem('token', token);
      });
  }
}
