import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcharCIMRComponent } from './barchar-CIMR.component';

describe('PlotlyComponentComponent', () => {
  let component: BarcharCIMRComponent;
  let fixture: ComponentFixture<BarcharCIMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcharCIMRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcharCIMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
