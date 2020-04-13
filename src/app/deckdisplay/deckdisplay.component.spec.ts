import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckdisplayComponent } from './deckdisplay.component';

describe('DeckdisplayComponent', () => {
  let component: DeckdisplayComponent;
  let fixture: ComponentFixture<DeckdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
