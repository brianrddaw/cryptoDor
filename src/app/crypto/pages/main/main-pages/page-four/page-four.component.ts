import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainTriAComponent } from '../../../../components/main-tri-a/main-tri-a.component';

@Component({
  selector: 'app-page-four',
  standalone: true,
  imports: [CommonModule, MainTriAComponent],
  templateUrl: './page-four.component.html',
  styleUrl: './page-four.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageFourComponent {}
