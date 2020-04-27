import { Component, OnInit } from '@angular/core';
import { BodyCard } from 'src/models/cardmodels/bodycard';
import { MindCard } from 'src/models/cardmodels/mindcard';
import { FaceCard } from 'src/models/cardmodels/facecard';
import { BronzeSuccessCard } from 'src/models/cardmodels/bronzesuccesscard';
import { Card } from 'src/models/cardmodels/cardparent';

@Component({
  selector: 'app-healthdeck',
  templateUrl: './healthdeck.component.html',
  styleUrls: ['./healthdeck.component.scss']
})
export class HealthdeckComponent implements OnInit {

  bodyCard:BodyCard;
  mindCard:MindCard;
  faceCard:FaceCard;
  bronzeSuccessCard:BronzeSuccessCard;
  healthDeck: Array<Card>;

  constructor() {
    this.bodyCard = new BodyCard;
    this.mindCard = new MindCard;
    this.faceCard = new FaceCard;
    this.bronzeSuccessCard = new BronzeSuccessCard;
    this.healthDeck = new Array<Card>();
    for(let i = 0; i < 2; i++){
      this.healthDeck.push(new BodyCard);
    }
    for(let i = 0; i < 2; i++){
      this.healthDeck.push(new MindCard);
    }
    for(let i = 0; i < 2; i++){
      this.healthDeck.push(new FaceCard);
    }
    for(let i = 0; i < 4; i++){
      this.healthDeck.push(new BronzeSuccessCard);
    }
  }

  ngOnInit() {
  }

  removeCard(card:Card){
    let index = this.healthDeck.indexOf(card);
    this.healthDeck.splice(index,1);
  }

  addCard(card:Card){
      this.healthDeck.push(card);
  }
}

