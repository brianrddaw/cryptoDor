import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CryptosComponent } from './cryptos/cryptos.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CryptosComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('links') links!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateLogo();
    this.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateLogo();
  }
  updateLogo(): void {
    if (window.innerWidth < 768) {
      this.links.nativeElement.style.display = 'none';
      this.menuButton.nativeElement.style.display = 'flex';
    } else {
      this.menuButton.nativeElement.style.display = 'none';
      this.menu.nativeElement.style.display = 'none';
      this.links.nativeElement.style.display = 'flex';
    }
  }

  toggleMenu(): void {
    this.menu.nativeElement.style.display =
      this.menu.nativeElement.style.display === 'none' ? 'flex' : 'none';
  }
}
