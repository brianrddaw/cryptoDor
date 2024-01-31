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
            });

            this.cdr.detectChanges();
          }
        },
        (error) => console.error(error)
      );
  }
}
