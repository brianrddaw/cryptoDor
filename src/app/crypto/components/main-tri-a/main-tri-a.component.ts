import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-tri-a',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-tri-a.component.html',
  styleUrl: './main-tri-a.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTriAComponent {}
