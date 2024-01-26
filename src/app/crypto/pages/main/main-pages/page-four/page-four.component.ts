import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-four',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-four.component.html',
  styleUrl: './page-four.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageFourComponent { }
