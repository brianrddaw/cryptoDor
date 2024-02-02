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

@Component({
  selector: 'app-cryptos',
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterOutlet, FooterComponent],
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent {
  diccionario: any = [];
  cryptoName: string = '';
  crytoImg: any = '';
  cryptoDescription: any = '';
  cryptoId: any = '';
  cryptoPosition: any = '';

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
          this.cryptoDescription = description;
          this.cryptoId = symbol;
          this.cryptoPosition = market_cap_rank;
          this.cdr.detectChanges();
          console.log(this.cryptoName);
          console.log(this.crytoImg);
          console.log(this.cryptoDescription.en);
          console.log(this.cryptoId);
          console.log(this.cryptoPosition);
        }
      )
    } else {
      console.log('No se ha introducido un nombre de criptomoneda');
    }
  }


}
