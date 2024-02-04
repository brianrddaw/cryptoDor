import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../main/main-pages/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CryptoInfoComponent } from '../../../crypto-info/crypto-info.component';

@Component({
    selector: 'app-cryptos',
    standalone: true,
    templateUrl: './cryptos.component.html',
    styleUrls: ['./cryptos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, DashboardComponent, RouterOutlet, FooterComponent, CryptoInfoComponent]
})


export class CryptosComponent {
  diccionario:        any = [];
  cryptoName:         string = '';
  crytoImg:           any = '';
  cryptoDescription:  any = '';
  cryptoId:           any = '';
  cryptoPosition:     any = '';

  // Contenedores para la informacion de las cryptos

  cryptoInfoContainer: any;

  cryptoSearchContainer: any;


  cryptoNameContainer: any;
  cryptoImgContainer:  any;
  cryptoDescriptionContainer: any;
  cryptoIdContainer: any;
  cryptoPositionContainer: any;
  ngAfterViewInit() {
    this.cryptoSearchContainer = document.getElementById('cryptos_search_container');
    this.cryptoInfoContainer = document.getElementById('crypto_info_container');
    this.cryptoNameContainer = document.getElementById('cryptoNameContainer');
    this.cryptoImgContainer = document.getElementById('crypto_info_top_image');
    this.cryptoDescriptionContainer = document.getElementById('cryptoDescriptionContainer');
    this.cryptoIdContainer = document.getElementById('cryptoIdContainer');
    this.cryptoPositionContainer = document.getElementById('cryptoPositionContainer');
  }

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.getCryptoInfo();
  }

  getCryptoInfo() {
    this.http
      .get<any>(`https://api.coingecko.com/api/v3/search/trending`)
      .subscribe(
        (data) => {
          for (let i = 0; i < 6; i++) {
            this.diccionario.push({
              img: data['coins'][i]['item']['large'],
              name: data['coins'][i]['item']['name'],
              id: data['coins'][i]['item']['id'],
            });

            this.cdr.detectChanges();
          }
        },
        (error) => console.error(error)
      );
  }




  cryptoSearch(cryptoName?: string): void {

    if (cryptoName) {
      console.log(cryptoName);
      this.cryptoName = cryptoName;
    } else {
      const input = document.getElementById('cryptos_search_input') as HTMLInputElement;
      this.cryptoName = input.value;
    }


    if(this.cryptoName) {
      console.log(this.cryptoName);

      // Obtener datos de la API

      this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${this.cryptoName}`).subscribe(
        data => {
          // console.log(data);
          const { image: { small }, name, symbol, market_cap_rank, description } = data;
          this.cryptoName = name;
          this.crytoImg = small;
          this.cryptoDescription = description.en;
          this.cryptoId = symbol;
          this.cryptoPosition = market_cap_rank;
          // console.log(this.cryptoName);
          // console.log(this.crytoImg);
          // console.log(this.cryptoDescription.en);
          // console.log(this.cryptoId);
          // console.log(this.cryptoPosition);
          // Mostrar datos en la pagina

          this.cryptoNameContainer.innerHTML = this.cryptoName + ".";
          this.cryptoImgContainer.style.backgroundImage = `url(${this.crytoImg})`;
          this.cryptoDescriptionContainer.innerHTML = this.cryptoDescription;
          this.cryptoIdContainer.innerHTML = this.cryptoId;
          this.cryptoPositionContainer.innerHTML = "#" + this.cryptoPosition;

          // Mostrar el contenedor de la informacion

          this.cryptoInfoContainer.classList.remove('hidden');
          this.cryptoInfoContainer.classList.add('visible');

          this.cryptoSearchContainer.classList.remove('visible');
          this.cryptoSearchContainer.classList.add('hidden');
          this.cdr.detectChanges();
        }
      )


    } else {
      console.log('No se ha introducido un nombre de criptomoneda');
    }
  }

  goBack() {
    this.cryptoInfoContainer.classList.remove('visible');
    this.cryptoInfoContainer.classList.add('hidden');
    this.cryptoSearchContainer.classList.remove('hidden');
    this.cryptoSearchContainer.classList.add('visible');
  }
}
