import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/models/deck';
import { Card } from 'src/models/cardmodels/cardparent';
import { MindCard } from 'src/models/cardmodels/mindcard';
import { BodyCard } from 'src/models/cardmodels/bodycard';
import { FaceCard } from 'src/models/cardmodels/facecard';
import { BodyMindCard } from 'src/models/cardmodels/bodymindcard';
import { BodyFaceCard } from 'src/models/cardmodels/bodyfacecard';
import { MindFaceCard } from 'src/models/cardmodels/mindfacecard';
import { BodyMindFaceCard } from 'src/models/cardmodels/bodyminddacecard';
import { FailureCard } from 'src/models/cardmodels/failurecard';
import { PartialSuccessCard } from 'src/models/cardmodels/partialsuccesscard';
import { BronzeSuccessCard } from 'src/models/cardmodels/bronzesuccesscard';
import { SilverSuccessCard } from 'src/models/cardmodels/silversuccess';
import { GoldSuccessCard } from 'src/models/cardmodels/goldsuccess';

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
  skillPoints: number;

  
  

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
    this.skillPoints = 15;
  }

  ngOnInit() {
    
  }

  addCard(card:Card){
    this.purchasedCards.push(card);
    this.skillPoints -= card.getSkillPointValue();
  }
}
