import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthdeckComponent } from './healthdeck.component';

describe('HealthdeckComponent', () => {
  let component: HealthdeckComponent;
  let fixture: ComponentFixture<HealthdeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthdeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthdeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
