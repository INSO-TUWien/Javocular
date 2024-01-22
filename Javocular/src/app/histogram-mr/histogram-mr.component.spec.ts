import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramMrComponent } from './histogram-mr.component';

describe('HistogramMrComponent', () => {
  let component: HistogramMrComponent;
  let fixture: ComponentFixture<HistogramMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistogramMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistogramMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
