import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcomponent5Component } from './webcomponent5.component';

describe('Webcomponent5Component', () => {
  let component: Webcomponent5Component;
  let fixture: ComponentFixture<Webcomponent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webcomponent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcomponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
