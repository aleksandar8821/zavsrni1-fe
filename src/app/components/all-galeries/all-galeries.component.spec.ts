import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGaleriesComponent } from './all-galeries.component';

describe('AllGaleriesComponent', () => {
  let component: AllGaleriesComponent;
  let fixture: ComponentFixture<AllGaleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGaleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGaleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
