import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cryptos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent {}
