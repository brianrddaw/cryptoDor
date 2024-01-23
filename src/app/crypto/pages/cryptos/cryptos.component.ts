import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cryptos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>cryptos works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent { }
