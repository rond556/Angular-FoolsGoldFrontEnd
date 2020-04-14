import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/models/deck';
import { Card } from 'src/models/cardparent';
import { MindCard } from 'src/models/mindcard';
import { BodyCard } from 'src/models/bodycard';
import { FaceCard } from 'src/models/facecard';
import { BodyMindCard } from 'src/models/bodymindcard';
import { BodyFaceCard } from 'src/models/bodyfacecard';
import { MindFaceCard } from 'src/models/mindfacecard';
import { BodyMindFaceCard } from 'src/models/bodyminddacecard';
import { FailureCard } from 'src/models/failurecard';
import { PartialSuccessCard } from 'src/models/partialsuccesscard';
import { BronzeSuccessCard } from 'src/models/bronzesuccesscard';
import { SilverSuccessCard } from 'src/models/silversuccess';
import { GoldSuccessCard } from 'src/models/goldsuccess';

@Component({
  selector: 'app-deckconstruct',
  templateUrl: './deckconstruct.component.html',
  styleUrls: ['./deckconstruct.component.css']
})
export class DeckconstructComponent implements OnInit {
  deck:Deck;
  cards:Array<Card>;
  purchasedCards:Array<Card>
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
    this.purchasedCards = new Array<Card>();
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
    
  }

  addCard(card:Card){
    this.purchasedCards.push(card);
  }
}
