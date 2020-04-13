import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/cards/deck';
import { Card } from 'src/cards/cardparent';
import { MindCard } from 'src/cards/mindcard';
import { BodyCard } from 'src/cards/bodycard';
import { FaceCard } from 'src/cards/facecard';
import { BodyMindCard } from 'src/cards/bodymindcard';
import { BodyFaceCard } from 'src/cards/bodyfacecard';
import { MindFaceCard } from 'src/cards/mindfacecard';
import { BodyMindFaceCard } from 'src/cards/bodyminddacecard';
import { FailureCard } from 'src/cards/failurecard';
import { PartialSuccessCard } from 'src/cards/partialsuccesscard';
import { BronzeSuccessCard } from 'src/cards/bronzesuccesscard';
import { SilverSuccessCard } from 'src/cards/silversuccess';
import { GoldSuccessCard } from 'src/cards/goldsuccess';

@Component({
  selector: 'app-deckconstruct',
  templateUrl: './deckconstruct.component.html',
  styleUrls: ['./deckconstruct.component.css']
})
export class DeckconstructComponent implements OnInit {
  deck:Deck;
  cards:Array<Card>;
  bodyCard:BodyCard;
  mindCard:MindCard;
  faceCard:FaceCard;
  bodyMindCard:BodyMindCard;
  bodyFaceCard:BodyFaceCard;
  mindFaceCard:MindFaceCard;
  bodyMindFaceCard:BodyMindFaceCard;
  failureCard:FailureCard;
  partialSuccessCard:PartialSuccessCard;
  bronzeSuccessCard:BronzeSuccessCard;
  silverSuccessCard:SilverSuccessCard;
  goldSuccessCard:GoldSuccessCard;

  
  

  constructor() {
    this.deck = new Deck;
    this.bodyCard = new BodyCard;
    this.mindCard = new MindCard;
    this.faceCard = new FaceCard;
    this.bodyMindCard = new BodyMindCard;
    this.bodyFaceCard = new BodyFaceCard;
    this.mindFaceCard = new MindFaceCard;
    this.bodyMindFaceCard = new BodyMindFaceCard;
    this.failureCard = new FailureCard;
    this.partialSuccessCard = new PartialSuccessCard;
    this.bronzeSuccessCard = new BronzeSuccessCard;
    this.silverSuccessCard = new SilverSuccessCard;
    this.goldSuccessCard = new GoldSuccessCard;
  }

  ngOnInit() {
    this.deck.getCards().forEach(card => console.log(card.getName));
  }

  addCard(card:Card){
    this.deck.addCard(card);
  }
}
