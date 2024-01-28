import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-main-page.component.html',
  styleUrl: './arrow-main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowMainPageComponent {
  constructor(private router: Router) {}

  // le introduces la id del elemento al que quieres ir de la seccion y te desplaza a este suaventemente
  goToSection(id: string) {
    console.log(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
