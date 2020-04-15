import { Card } from './cardmodels/cardparent';
import { MindCard } from './cardmodels/mindcard';
import { BodyCard } from './cardmodels/bodycard';
import { FaceCard } from './cardmodels/facecard';
import { FailureCard } from './cardmodels/failurecard';
import { PartialSuccessCard } from './cardmodels/partialsuccesscard';
import { BronzeSuccessCard } from './cardmodels/bronzesuccesscard';
import { SilverSuccessCard } from './cardmodels/silversuccess';

export class Deck{
    cards: Array<Card>;


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