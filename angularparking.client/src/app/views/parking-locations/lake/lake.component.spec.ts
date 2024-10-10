import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeComponent } from './lake.component';

describe('LakeComponent', () => {
  let component: LakeComponent;
  let fixture: ComponentFixture<LakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
