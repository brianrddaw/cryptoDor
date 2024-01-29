import { Routes } from '@angular/router';
import { CryptosComponent } from './crypto/pages/cryptos/cryptos.component';
import { MainComponent } from './crypto/pages/main/main.component';
import { PricesComponent } from './crypto/pages/prices/prices.component';
import { NftsComponent } from './crypto/pages/nfts/nfts.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cryptos', component: CryptosComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'nfts', component: NftsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];
