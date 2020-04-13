import { Card } from './cardparent';
import { MindCard } from './mindcard';
import { BodyCard } from './bodycard';
import { FaceCard } from './facecard';
import { FailureCard } from './failurecard';
import { PartialSuccessCard } from './partialsuccesscard';
import { BronzeSuccessCard } from './bronzesuccesscard';
import { SilverSuccessCard } from './silversuccess';

export class Deck{
    cards: Array<Card>;
    bronzeSuccessCard: BronzeSuccessCard


    constructor(){
        this.cards = new Array<Card>();
        for(let i = 1; i <= 10; i++){
            this.cards.push(new BronzeSuccessCard);
            if(i <= 3){
                this.cards.push(new MindCard);
                this.cards.push(new BodyCard);
                this.cards.push(new FaceCard);
                this.cards.push(new FailureCard);
            }
            if(i <= 2){
                this.cards.push(new PartialSuccessCard);
            }
            if(i <= 1){
                this.cards.push(new SilverSuccessCard);
            }
        }
    }

    getCards(){
        return this.cards;
    }

    addCard(card:Card){
        this.cards.push(card);
    }
}