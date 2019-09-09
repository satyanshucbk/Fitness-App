import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalPage } from './bmi-cal.page';

describe('BMICalPage', () => {
  let component: BMICalPage;
  let fixture: ComponentFixture<BMICalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMICalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMICalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
