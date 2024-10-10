import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeatailsComponent } from './home-deatails.component';

describe('HomeDeatailsComponent', () => {
  let component: HomeDeatailsComponent;
  let fixture: ComponentFixture<HomeDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDeatailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
