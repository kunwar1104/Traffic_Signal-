import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSingnalComponent } from './traffic-singnal.component';

describe('TrafficSingnalComponent', () => {
  let component: TrafficSingnalComponent;
  let fixture: ComponentFixture<TrafficSingnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficSingnalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficSingnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
