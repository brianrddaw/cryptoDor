import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../dashboard.component';
import { FooterComponent } from '../main/main-pages/footer/footer.component';
import { HtmlParser } from '@angular/compiler';

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
  cryptoId: string = '';
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

  // Containers
  priceChangeNameContainer: any;
  priceChangeValueContainer: any;
  cryptoImageContainer: any;
  priceInfoContainer: any;


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  checkboxValues = [true, false, false, false, false, false];
  checkboxNames = ['24h', '7d', '14d', '30d', '60d', '1y'];

  onCheckboxClick(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
  
    if (!target.checked) {
      event.preventDefault();
    } else {
      this.uncheckAll();
      this.checkboxValues[index] = true;
      this.updatePriceChange(index);
    }
  }

  uncheckAll() {
    for (let i = 0; i < this.checkboxValues.length; i++) {
      this.checkboxValues[i] = false;
    }
  }

  updatePriceChange(i: number): void {
    // console.log('updatePriceChange');
    this.priceChangeNameContainer = document.getElementById('priceChangeName');
    this.priceChangeValueContainer = document.getElementById('priceChangeValue');
    this.priceChangeNameContainer.innerHTML = "Price change " + this.checkboxNames[i] + ".";

    switch(i) {
      case 0:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange24h.toFixed(2) + "€";
        break;
      case 1:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange7d.toFixed(2) + "€";
        break;
      case 2:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange14d.toFixed(2) + "€";
        break;
      case 3:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange30d.toFixed(2) + "€";
        break;
      case 4:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange60d.toFixed(2) + "€";
        break;
      case 5:
        this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange1y.toFixed(2) + "€";
        break;
      default:
        this.priceChangeValueContainer.innerHTML = "0.00€";
        break;
    }
    if(parseFloat(this.priceChangeValueContainer.innerHTML) < 0) {
      this.priceChangeValueContainer.style.color = 'red';
    } else {
      this.priceChangeValueContainer.style.color = 'green';
    }
  }

  searchCrypto(): void {
    if(this.cryptoName) {
      // console.log(this.cryptoName);

      // Cogemos los datos de la api con https://api.coingecko.com/api/v3/coins/{id}
      this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${this.cryptoName.toLocaleLowerCase()}`).subscribe(
        data => {
          // console.log(data);
          const { image: { small }, name, id, symbol, market_cap_rank, market_data: { current_price, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, price_change_percentage_14d_in_currency, price_change_percentage_30d_in_currency, price_change_percentage_60d_in_currency, price_change_percentage_1y_in_currency } } = data;
          this.cryptoName           = name;
          this.cryptoId             = id;
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
          // console.log(this.cryptoName);
          // console.log(this.cryptoPrice);
          // console.log(this.cryptoImage);
          // console.log(this.cryptoSymbol);
          // console.log(this.cryptoMarketPosition);
          // console.log(this.cryptoPriceChange24h);
          // console.log(this.cryptoPriceChange7d);
          // console.log(this.cryptoPriceChange14d);
          // console.log(this.cryptoPriceChange30d);
          // console.log(this.cryptoPriceChange60d);
          // console.log(this.cryptoPriceChange1y);



          this.priceInfoContainer = document.getElementById('prices-info-container');
          this.priceInfoContainer.style.display = 'grid';


          this.cryptoImageContainer = document.getElementById('prices-info-top-image');
          this.cryptoImageContainer.style.backgroundImage = `url(${this.cryptoImage})`;


          this.priceChangeNameContainer = document.getElementById('priceChangeName');
          this.priceChangeValueContainer = document.getElementById('priceChangeValue');


          this.priceChangeValueContainer.innerHTML = this.cryptoPriceChange24h.toFixed(2) + "€";

          if(parseFloat(this.priceChangeValueContainer.innerHTML) < 0) {
            this.priceChangeValueContainer.style.color = 'red';
          } else {
            // console.log(parseFloat(this.priceChangeValueContainer.innerHTML))
            this.priceChangeValueContainer.style.color = 'green';
          }

          this.cdr.detectChanges();          


        }
      )
      


    } else {
      console.log('No crypto name entered');
    }
  }

}
