import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLocationsComponent } from './parking-locations.component';

describe('ParkingLocationsComponent', () => {
  let component: ParkingLocationsComponent;
  let fixture: ComponentFixture<ParkingLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
