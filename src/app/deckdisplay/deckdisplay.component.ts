import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/cards/deck';
import { Card } from 'src/cards/cardparent';

@Component({
  selector: 'app-deckdisplay',
  templateUrl: './deckdisplay.component.html',
  styleUrls: ['./deckdisplay.component.css']
})
export class DeckdisplayComponent implements OnInit {
  deck:Deck;
  cards:Array<Card>;

  constructor() {
    this.deck = new Deck;
    this.cards = this.deck.getCards();
  }

  ngOnInit() {
    this.cards.forEach(card => console.log(card.getName));
      
  }
}
