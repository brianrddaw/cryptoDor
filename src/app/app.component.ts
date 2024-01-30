import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CryptosComponent } from './crypto/pages/cryptos/cryptos.component';
import { PricesComponent } from './crypto/pages/prices/prices.component';
import { MainComponent } from './crypto/pages/main/main.component';
import { DashboardComponent } from './crypto/pages/dashboard.component';
import { NftsComponent } from './crypto/pages/nfts/nfts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    CryptosComponent,
    PricesComponent,
    MainComponent,
    NftsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
