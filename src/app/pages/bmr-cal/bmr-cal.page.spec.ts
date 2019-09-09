import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMRCalPage } from './bmr-cal.page';

describe('BMRCalPage', () => {
  let component: BMRCalPage;
  let fixture: ComponentFixture<BMRCalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMRCalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMRCalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
