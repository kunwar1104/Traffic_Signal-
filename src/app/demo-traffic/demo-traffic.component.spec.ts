import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTrafficComponent } from './demo-traffic.component';

describe('DemoTrafficComponent', () => {
  let component: DemoTrafficComponent;
  let fixture: ComponentFixture<DemoTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTrafficComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
