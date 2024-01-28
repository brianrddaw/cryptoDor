import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-tri-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-tri-a.component.html',
  styleUrl: './main-tri-a.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTriAComponent {}
