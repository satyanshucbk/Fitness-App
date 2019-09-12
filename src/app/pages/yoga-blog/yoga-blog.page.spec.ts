import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaBlogPage } from './yoga-blog.page';

describe('YogaBlogPage', () => {
  let component: YogaBlogPage;
  let fixture: ComponentFixture<YogaBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
