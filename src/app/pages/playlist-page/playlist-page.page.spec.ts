import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPagePage } from './playlist-page.page';

describe('PlaylistPagePage', () => {
  let component: PlaylistPagePage;
  let fixture: ComponentFixture<PlaylistPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
