import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBlogsPage } from './health-blogs.page';

describe('HealthBlogsPage', () => {
  let component: HealthBlogsPage;
  let fixture: ComponentFixture<HealthBlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBlogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
