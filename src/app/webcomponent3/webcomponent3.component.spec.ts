import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcomponent3Component } from './webcomponent3.component';

describe('Webcomponent3Component', () => {
  let component: Webcomponent3Component;
  let fixture: ComponentFixture<Webcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
