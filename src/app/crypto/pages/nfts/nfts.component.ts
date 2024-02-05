import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../dashboard.component';
import { FooterComponent } from '../main/main-pages/footer/footer.component';

@Component({
  selector: 'app-nfts',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent, FooterComponent],
  templateUrl: './nfts.component.html',
  styleUrl: './nfts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftsComponent {
  searchTerm: string = '';
  nftImageUrl: string = '';
  nftName: string = '';
  assetPlatformId: string = '';
  mainSearchDiv: any;
  nftContentDiv: any;
  nftContractAddress: any;
  nftDescription: any;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  onSubmit() {
    if (this.searchTerm) {
      this.getNftInfo(this.searchTerm);
    } else {
      console.error('Search term is not defined');
    }
  }

  getNftInfo(nftName: string) {
    this.http
      .get<any>(`https://api.coingecko.com/api/v3/nfts/${nftName}`)
      .subscribe(
        (data) => {
          // console.log(data);
          const {
            image: { small },
            name,
            asset_platform_id,
            contract_address,
            description,
          } = data;
          this.nftImageUrl = small;
          this.nftName = name;
          this.assetPlatformId = asset_platform_id;
          this.nftContractAddress = contract_address;
          this.nftDescription = description;
          this.cdr.detectChanges();
          this.updateView();
        },
        (error) => console.error(error)
      );
  }

  updateView() {
    this.mainSearchDiv = document.getElementById('mainSearch');
    this.nftContentDiv = document.getElementById('dataShow');
    if (this.mainSearchDiv && this.nftContentDiv) {
      this.mainSearchDiv.style.opacity = '1';
      this.fadeOut(this.mainSearchDiv, () => {
        this.mainSearchDiv.style.display = 'none';
        this.nftContentDiv.style.display = 'block';
        this.nftContentDiv.style.opacity = '0';
        this.fadeIn(this.nftContentDiv);
      });
    } else {
      console.error('Elements not found');
    }
  }

  fadeOut(element: any, callback: () => void) {
    let opacity = 1;
    const timer = setInterval(() => {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.opacity = '0';
        callback();
      }
      element.style.opacity = String(opacity);
      opacity -= opacity * 0.1;
    }, 10);
  }

  fadeIn(element: any) {
    let opacity = 0;
    const timer = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(timer);
        element.style.opacity = '1';
      }
      element.style.opacity = String(opacity);
      opacity += 0.1;
    }, 10);
  }
  goBack() {
    this.mainSearchDiv = document.getElementById('mainSearch');
    this.nftContentDiv = document.getElementById('dataShow');

    if (this.mainSearchDiv && this.nftContentDiv) {
      this.nftContentDiv.style.opacity = '1';
      this.fadeOut(this.nftContentDiv, () => {
        this.nftContentDiv.style.display = 'none';
        this.mainSearchDiv.style.display = 'block';
        this.mainSearchDiv.style.opacity = '0';
        this.fadeIn(this.mainSearchDiv);
      });
    } else {
      console.error('Elements not found');
    }
  }
}
