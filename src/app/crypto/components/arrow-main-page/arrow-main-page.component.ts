import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-main-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './arrow-main-page.component.html',
  styleUrl: './arrow-main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowMainPageComponent { }
