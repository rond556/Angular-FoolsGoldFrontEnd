import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/models/deck';
import { Card } from 'src/models/cardmodels/cardparent';

@Component({
  selector: 'app-deckdisplay',
  templateUrl: './deckdisplay.component.html',
  styleUrls: ['./deckdisplay.component.css']
})
export class DeckdisplayComponent implements OnInit {
  deck:Deck;
  cards:Array<Card>;
  cardDraw: Array<Card>;

  constructor() {
    this.deck = new Deck;
    this.cards = this.deck.getCards();
  }

  ngOnInit() {
    this.cards.forEach(card => console.log(card.getName));
  }

  drawCards(){
    this.cardDraw = new Array<Card>();
    this.cards = this.shuffle(this.cards);
    for(let i = 0; i < 8; i++){
      this.cardDraw.push(this.cards[i]);
    }
  }

  shuffle(cards: Array<Card>){
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
  }
}
