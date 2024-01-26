import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTwoComponent { }
