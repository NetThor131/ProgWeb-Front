
import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from 'src/app/core/services';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
})
export class LocalizacaoComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  locations: any[] = [];

  options: any;

  overlays: any[] = [];

  showMap: boolean = false;

  constructor(private localizacaoService: LocalizacaoService) {}

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          // console.log('Latitude:', this.latitude);
          // console.log('Longitude:', this.longitude);


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
    this.localizacaoService.obterLocalizacao().subscribe((response) => {
      this.locations = response.map((data) => {
        const [latitude, longitude] = data.coordenadas.split(';');
        return {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
          title: data.count,
        };
      });

      this.montarEGerarMapa();
    });
  }

  montarEGerarMapa() {
    this.options = {
      center: { lat: -14, lng: -51 },
      zoom: 5,
    };

    this.overlays = this.locations.map(
      (location) =>
        new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          title: location.title.toString(),
        })
    );

    this.showMap = true;

  }
}
