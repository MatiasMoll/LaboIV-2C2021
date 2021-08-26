import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitacion1Component } from './ejercitacion1.component';

describe('Ejercitacion1Component', () => {
  let component: Ejercitacion1Component;
  let fixture: ComponentFixture<Ejercitacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitacion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercitacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
