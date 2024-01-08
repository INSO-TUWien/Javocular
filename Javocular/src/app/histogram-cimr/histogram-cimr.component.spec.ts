import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramCIMRComponent } from './histogram-cimr.component';

describe('HistogramCIMRComponent', () => {
  let component: HistogramCIMRComponent;
  let fixture: ComponentFixture<HistogramCIMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistogramCIMRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistogramCIMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
