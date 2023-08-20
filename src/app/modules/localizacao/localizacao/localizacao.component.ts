import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from 'src/app/core/services';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
})
export class LocalizacaoComponent implements OnInit {
  data$!: Observable<any[]>;

  latitude: number = 0;
  longitude: number = 0;

  displayedColumns = ['descricaoLocalizacao', 'count'];

  constructor(private localizacaoService: LocalizacaoService) {}

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          console.log('Latitude:', this.latitude);
          console.log('Longitude:', this.longitude);

          this.localizacaoService.getCidadeEstadoPais(
            this.latitude,
            this.longitude
          );
        },
        (error) => {
          console.error('Erro ao obter a localização:', error);
        }
      );
    } else {
      console.warn('Geolocalização não suportada pelo navegador.');
    }
  }

  obterLocalizacao() {
    this.data$ = this.localizacaoService.obterLocalizacao();
  }
}
