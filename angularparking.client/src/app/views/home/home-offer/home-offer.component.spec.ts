import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfferComponent } from './home-offer.component';

describe('HomeOfferComponent', () => {
  let component: HomeOfferComponent;
  let fixture: ComponentFixture<HomeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
