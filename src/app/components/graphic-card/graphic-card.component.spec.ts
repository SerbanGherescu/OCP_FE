import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardComponent } from './graphic-card.component';

describe('GraphicCardComponent', () => {
  let component: GraphicCardComponent;
  let fixture: ComponentFixture<GraphicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicCardComponent]
    });
    fixture = TestBed.createComponent(GraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
