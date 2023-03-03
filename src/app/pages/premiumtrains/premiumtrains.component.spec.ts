import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumtrainsComponent } from './premiumtrains.component';

describe('PremiumtrainsComponent', () => {
  let component: PremiumtrainsComponent;
  let fixture: ComponentFixture<PremiumtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumtrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
