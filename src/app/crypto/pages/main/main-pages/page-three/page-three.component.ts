import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-three',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-three.component.html',
  styleUrl: './page-three.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageThreeComponent { }
