import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalizacaoService {
  apiUrl: string = `${environment.BASE_URL}/Localizacao`;

  constructor(private httpClient: HttpClient) {}

  adicionar(localizacao: any) {
    let body = {
      idULocalizacao: localizacao.idULocalizacao,
      ipAddress: localizacao.ipAddress,
      location: localizacao.location,
      cidade: localizacao.cidade,
      estado: localizacao.estado,
      pais: localizacao.pais,
      createdDate: localizacao.createdDate,
    };

    return this.httpClient.post(`${this.apiUrl}/Adicionar`, body);
  }
}
