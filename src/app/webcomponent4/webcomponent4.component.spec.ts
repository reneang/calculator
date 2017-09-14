import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcomponent4Component } from './webcomponent4.component';

describe('Webcomponent4Component', () => {
  let component: Webcomponent4Component;
  let fixture: ComponentFixture<Webcomponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webcomponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcomponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
