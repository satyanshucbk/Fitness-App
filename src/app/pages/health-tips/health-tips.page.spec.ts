import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTipsPage } from './health-tips.page';

describe('HealthTipsPage', () => {
  let component: HealthTipsPage;
  let fixture: ComponentFixture<HealthTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
