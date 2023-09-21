import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerComponent } from './cooler.component';

describe('CoolerComponent', () => {
  let component: CoolerComponent;
  let fixture: ComponentFixture<CoolerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerComponent]
    });
    fixture = TestBed.createComponent(CoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
