import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesInfoComponent } from './prices-info.component';

describe('CryptoInfoComponent', () => {
  let component: PricesInfoComponent;
  let fixture: ComponentFixture<PricesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
