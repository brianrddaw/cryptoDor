import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { FooterComponent } from '../main/main-pages/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, 
     DashboardComponent,
     FooterComponent,
     FormsModule,
    ],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
  // Declaraciones
  cryptoName: string = '';
  cryptoPrice: number = 0;
  cryptoImage: string = '';
  cryptoSymbol: string = '';
  cryptoMarketPosition: number = 0;
  cryptoPriceChange: number = 0;

  cryptoPriceChange24h: number = 0;
  cryptoPriceChange7d: number = 0;
  cryptoPriceChange14d: number = 0;
  cryptoPriceChange30d: number = 0;
  cryptoPriceChange60d: number = 0;
  cryptoPriceChange1y: number = 0;



  constructor(private http: HttpClient) {} // Inject HttpClient module

  searchCrypto(): void {
    if(this.cryptoName) {
      console.log(this.cryptoName);

      // Cogemos los datos de la api con https://api.coingecko.com/api/v3/coins/{id}
      this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${this.cryptoName}`).subscribe(
        data => {
          console.log(data);
          const { image: { small }, name, symbol, market_cap_rank, market_data: { current_price, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, price_change_percentage_14d_in_currency, price_change_percentage_30d_in_currency, price_change_percentage_60d_in_currency, price_change_percentage_1y_in_currency } } = data;
          this.cryptoName           = name;
          this.cryptoPrice          = current_price.eur;
          this.cryptoImage          = small;
          this.cryptoSymbol         = symbol;
          this.cryptoMarketPosition = market_cap_rank;
          this.cryptoPriceChange24h = (price_change_percentage_24h_in_currency.eur/100) * this.cryptoPrice;
          this.cryptoPriceChange7d  = (price_change_percentage_7d_in_currency.eur/100) * this.cryptoPrice;
          this.cryptoPriceChange14d = (price_change_percentage_14d_in_currency.eur/100) * this.cryptoPrice;
          this.cryptoPriceChange30d = (price_change_percentage_30d_in_currency.eur/100) * this.cryptoPrice;
          this.cryptoPriceChange60d = (price_change_percentage_60d_in_currency.eur/100) * this.cryptoPrice;
          this.cryptoPriceChange1y  = (price_change_percentage_1y_in_currency.eur/100) * this.cryptoPrice;
          console.log(this.cryptoName);
          console.log(this.cryptoPrice);
          console.log(this.cryptoImage);
          console.log(this.cryptoSymbol);
          console.log(this.cryptoMarketPosition);
          console.log(this.cryptoPriceChange24h);
          console.log(this.cryptoPriceChange7d);
          console.log(this.cryptoPriceChange14d);
          console.log(this.cryptoPriceChange30d);
          console.log(this.cryptoPriceChange60d);
          console.log(this.cryptoPriceChange1y);
        }
      )
      


    } else {
      console.log('No crypto name entered');
    }
  }

}
