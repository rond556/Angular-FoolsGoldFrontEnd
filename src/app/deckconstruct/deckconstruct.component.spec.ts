import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckconstructComponent } from './deckconstruct.component';

describe('DeckconstructComponent', () => {
  let component: DeckconstructComponent;
  let fixture: ComponentFixture<DeckconstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckconstructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckconstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
