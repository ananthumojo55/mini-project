import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristtrainsComponent } from './touristtrains.component';

describe('TouristtrainsComponent', () => {
  let component: TouristtrainsComponent;
  let fixture: ComponentFixture<TouristtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristtrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
