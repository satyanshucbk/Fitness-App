import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBlogPage } from './core-blog.page';

describe('CoreBlogPage', () => {
  let component: CoreBlogPage;
  let fixture: ComponentFixture<CoreBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
