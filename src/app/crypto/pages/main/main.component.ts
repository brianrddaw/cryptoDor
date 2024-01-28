import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageOneComponent } from './main-pages/page-one/page-one.component';
import { PageTwoComponent } from './main-pages/page-two/page-two.component';
import { PageThreeComponent } from './main-pages/page-three/page-three.component';
import { PageFourComponent } from './main-pages/page-four/page-four.component';
import { FooterComponent } from './main-pages/footer/footer.component';
import { ArrowMainPageComponent } from '../../components/arrow-main-page/arrow-main-page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    FooterComponent,
    ArrowMainPageComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
