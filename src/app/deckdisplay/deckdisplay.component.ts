import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/cards/deck';

@Component({
  selector: 'app-deckdisplay',
  templateUrl: './deckdisplay.component.html',
  styleUrls: ['./deckdisplay.component.css']
})
export class DeckdisplayComponent implements OnInit {
  deck:Deck;

  constructor(deck: Deck) {
    this.deck = deck;
  }

  ngOnInit() {
    
  }

}
