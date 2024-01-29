import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricesComponent } from './prices/prices.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CryptosComponent } from './cryptos/cryptos.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PricesComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CryptosComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor() {}
}
