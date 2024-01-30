import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { FooterComponent } from '../main/main-pages/footer/footer.component';

@Component({
  selector: 'app-nfts',
  standalone: true,
  imports: [CommonModule, DashboardComponent, FooterComponent],
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftsComponent {}
