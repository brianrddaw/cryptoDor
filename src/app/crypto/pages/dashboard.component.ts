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
  @ViewChild('logo') logo!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateLogo();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateLogo();
  }
  updateLogo(): void {
    if (window.innerWidth < 768) {
      console.log('small');
      this.logo.nativeElement.innerText = '@';
    } else {
      console.log('large');
      this.logo.nativeElement.innerText = '@Crypto';
    }
  }
}
