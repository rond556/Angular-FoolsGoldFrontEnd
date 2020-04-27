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
import { DeckService } from "src/app/services/deck.service";

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
  level:number;
  nameMap: Map<String, number>;
  typeMap: Map<String, number>;

  
  
  

  constructor(private deckService: DeckService) {
    this.deck = new Deck;
    this.cards = this.deck.getCards();
    this.purchasedCards = new Array<Card>();
    this.level = 1;

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
    this.skillPoints = 32;

    this.nameMap = new Map();
    this.nameMap.set("Body Card", 3);
    this.nameMap.set("Mind Card", 3);
    this.nameMap.set("Face Card", 3);
    this.nameMap.set("Body/Mind Card", 0);
    this.nameMap.set("Body/Face Card", 0);
    this.nameMap.set("Mind/Face Card", 0);
    this.nameMap.set("Body/Mind/Face Card", 0);
    this.nameMap.set("Failure Card", 3);
    this.nameMap.set("Partial Success Card", 2);
    this.nameMap.set("Bronze Success Card", 10);
    this.nameMap.set("Silver Success Card", 1);
    this.nameMap.set("Gold Success Card", 0);

  }

  ngOnInit() {

  }

  addCard(card:Card){
    if(this.skillPoints - card.getSkillPointValue() >= 0
        && this.purchasedCards.length < 15
            && card.getCap() > this.nameMap.get(card.getName())){
      this.purchasedCards.push(card);
      this.skillPoints -= card.getSkillPointValue();
      this.addCapByName(card.getName());
      console.log(this.nameMap.get(card.getName()));
    }
  }
  removeCard(card:Card){
    let index = this.purchasedCards.indexOf(card);
    this.skillPoints += card.getSkillPointValue();
    this.purchasedCards.splice(index,1);
    this.removeCapByName(card.getName());
    console.log(this.nameMap.get(card.getName()));
  }

  createFullDeck(){
    for(let i = 0; i < this.purchasedCards.length; i++){
      this.cards.push(this.purchasedCards[i]);
    }
    this.deck.setCards(this.cards);
    this.deckService.setDeck(this.deck);
  }

  addCapByName(cardName: String){
    this.nameMap.set(cardName, this.nameMap.get(cardName) + 1);
  }

  removeCapByName(cardName: String){
    this.nameMap.set(cardName, this.nameMap.get(cardName) - 1);
  }
}
