import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/models/deck';
import { Card } from 'src/models/cardmodels/cardparent';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-deckdisplay',
  templateUrl: './deckdisplay.component.html',
  styleUrls: ['./deckdisplay.component.css']
})
export class DeckdisplayComponent implements OnInit {
  deck:Deck;
  cards:Array<Card>;
  cardDraw: Array<Card>;
  images = ["downtownnightlife",
            "floodedtown",
            "mountainvilagecastle",
            "twilighttemple",
 ]
  currentBackground = this.images[Math.floor(Math.random() * this.images.length)];
  numberOfCards: Number;

  constructor(private deckService: DeckService) {
    this.deck = this.deckService.getDeck();
    this.cards = this.deck.getCards();
    this.numberOfCards = 8;
  }

  ngOnInit() {
    this.changeImage();
  }

  drawCards(){
    this.cardDraw = new Array<Card>();
    this.cards = this.shuffle(this.cards);
    for(let i = 0; i < this.numberOfCards; i++){
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

  changeImage() {
    this.currentBackground = 'https://github.com/rond556/Angular-FoolsGoldFrontEnd/blob/master/src/assets/backgrounds/' + this.images[Math.floor(Math.random() * this.images.length)] + ".jpg?raw=true";
   }
}
