import { Injectable } from '@angular/core';
import { Card } from 'src/models/cardmodels/cardparent';
import { Deck } from 'src/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  deck:Deck;

  constructor() { }

  setDeck(deck: Deck){
    this.deck = deck;
  }

  getDeck(){
    return this.deck;
  }
}
