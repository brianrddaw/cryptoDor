import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../main/main-pages/footer/footer.component';

@Component({
  selector: 'app-cryptos',
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterOutlet, FooterComponent],
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent {}
