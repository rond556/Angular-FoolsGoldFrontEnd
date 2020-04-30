import { Component, OnInit } from '@angular/core';
import { BronzeHealthCard } from 'src/models/healthdeckcards.ts/bronzehealthcard';
import { BodyHealthCard } from 'src/models/healthdeckcards.ts/bodyhealthcard';
import { MindHealthCard } from 'src/models/healthdeckcards.ts/mindhealthcard';
import { FaceHealthCard } from 'src/models/healthdeckcards.ts/facehealthcard';
import { HealthDeck } from 'src/models/healthdeck';
import { HealthCard } from 'src/models/healthdeckcards.ts/healthcardparent';

@Component({
  selector: 'app-healthdeck',
  templateUrl: './healthdeck.component.html',
  styleUrls: ['./healthdeck.component.scss']
})
export class HealthdeckComponent implements OnInit {

  healthDeck: HealthDeck;
  bodyCard:BodyHealthCard;
  mindCard:MindHealthCard;
  faceCard:FaceHealthCard;
  bronzeCard:BronzeHealthCard;
  cards: Array<HealthCard>;
  healthCardOptions: Array<HealthCard>;

  constructor() {
    this.healthDeck = new HealthDeck;
    this.cards = this.healthDeck.getCards();

    this.bodyCard = new BodyHealthCard;
    this.mindCard = new MindHealthCard;
    this.faceCard = new FaceHealthCard;
    this.bronzeCard = new BronzeHealthCard;

    this.healthCardOptions = new Array<HealthCard>();
    this.healthCardOptions.push(this.bodyCard);
    this.healthCardOptions.push(this.mindCard);
    this.healthCardOptions.push(this.faceCard);
    this.healthCardOptions.push(this.bronzeCard);
  }

  ngOnInit() {
  }

  removeCard(card:HealthCard){
    let index;
    for(let currentCard of this.cards){
      console.log(currentCard.getName())
      if(card.getName() == currentCard.getName()){
        index = this.cards.indexOf(currentCard);
        this.cards.splice(index,1);
        break;
      }
    }  
  }

  

  addCard(card:HealthCard){
      this.cards.push(card);
  }

  changeCard(card: HealthCard, index: number){
    if(card.getIndex() < 3){
      this.cards[index] = this.healthCardOptions[card.getIndex() + 1];
    } else if (card.getIndex() == 3){
      this.cards[index] = this.healthCardOptions[0];
    }
  }
}


