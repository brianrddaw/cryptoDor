import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {}
