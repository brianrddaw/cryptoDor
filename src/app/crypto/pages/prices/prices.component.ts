import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule],
  template: `<p>prices works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {}
