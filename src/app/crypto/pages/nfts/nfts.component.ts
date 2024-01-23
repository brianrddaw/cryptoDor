import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nfts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>nfts works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftsComponent { }
