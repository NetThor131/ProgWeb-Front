import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerguntasService {
  constructor(private httpClient: HttpClient) {}

  consulta(nrQuestao: number) {
    return this.httpClient
      .get<any>(`${environment.BASE_URL}/Consultas/${nrQuestao}`)
      .subscribe((resultado) => console.log(resultado));
  }
}
