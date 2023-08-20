import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalizacaoService {
  apiUrl: string = `${environment.BASE_URL}/Localizacao`;

  cidade: string = '';
  estado: string = '';
  pais: string = '';

  constructor(private httpClient: HttpClient) {}

  getCidadeEstadoPais(latitude: number, longitude: number) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    return this.httpClient.get<any>(apiUrl).subscribe(
      (response) => {
        this.cidade = response.address.city;
        this.estado = response.address.state;
        this.pais = response.address.country;

        this.adicionar();
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );
  }

  adicionar() {
    const currentDate = new Date();

    let body = {
      idULocalizacao: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      ipAddress: '127.0.0.2',
      location: 'string',
      cidade: this.cidade,
      estado: this.estado,
      pais: this.pais,
      createdDate: currentDate.toISOString(),
    };

    return this.httpClient.post(`${this.apiUrl}/Adicionar`, body).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obterLocalizacao() {
    return this.httpClient.get(`${this.apiUrl}/Obter`);
  }
}
