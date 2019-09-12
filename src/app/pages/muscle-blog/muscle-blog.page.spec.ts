import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleBlogPage } from './muscle-blog.page';

describe('MuscleBlogPage', () => {
  let component: MuscleBlogPage;
  let fixture: ComponentFixture<MuscleBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
