import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatburnBlogPage } from './fatburn-blog.page';

describe('FatburnBlogPage', () => {
  let component: FatburnBlogPage;
  let fixture: ComponentFixture<FatburnBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatburnBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatburnBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
