import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarFirstComponent } from './chart-bar-first.component';

describe('ChartBarFirstComponent', () => {
  let component: ChartBarFirstComponent;
  let fixture: ComponentFixture<ChartBarFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
