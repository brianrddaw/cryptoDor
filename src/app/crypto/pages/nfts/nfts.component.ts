import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-nfts',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent
  ],
  templateUrl: './nfts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftsComponent { }
