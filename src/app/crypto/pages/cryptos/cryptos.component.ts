import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cryptos',
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterOutlet],
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent {}
