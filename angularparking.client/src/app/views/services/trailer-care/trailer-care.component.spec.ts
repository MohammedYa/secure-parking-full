import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerCareComponent } from './trailer-care.component';

describe('TrailerCareComponent', () => {
  let component: TrailerCareComponent;
  let fixture: ComponentFixture<TrailerCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailerCareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrailerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
