import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowMainPageComponent } from '../../../../components/arrow-main-page/arrow-main-page.component';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [CommonModule, ArrowMainPageComponent],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOneComponent {}
