import { Card } from './cardparent';
import { MindCard } from './mindcard';
import { BodyCard } from './bodycard';
import { FaceCard } from './facecard';
import { BodyMindCard } from './bodymindcard';
import { BodyFaceCard } from './bodyfacecard';
import { MindFaceCard } from './mindfacecard';
import { BodyMindFaceCard } from './bodyminddacecard';
import { FailureCard } from './failurecard';
import { PartialSuccessCard } from './partialsuccesscard';
import { BronzeSuccessCard } from './bronzesuccesscard';
import { SilverSuccessCard } from './silversuccess';
import { GoldSuccessCard } from './goldsuccess';

export class Deck{
    deck: Array<Card>;
    mindCard: MindCard;
    bodyCard: BodyCard;
    faceCard: FaceCard;
    bodyMindCard: BodyMindCard;
    bodyFaceCard: BodyFaceCard;
    mindFaceCard: MindFaceCard;
    bodyMindFaceCard: BodyMindFaceCard;
    failureCard: FailureCard;
    partialSuccessCard: PartialSuccessCard;
    bronzeSuccessCard: BronzeSuccessCard;
    silverSuccessCard: SilverSuccessCard;
    goldSuccessCard: GoldSuccessCard


    constructor(){
        for(let i = 1; i <= 10; i++){
            this.deck.push(this.bronzeSuccessCard);
            if(i <= 3){
                this.deck.push(this.mindCard);
                this.deck.push(this.bodyCard);
                this.deck.push(this.faceCard);
                this.deck.push(this.failureCard);
            }
            if(i <= 2){
                this.deck.push(this.partialSuccessCard);
            }
            if(i <= 1){
                this.deck.push.apply(this.silverSuccessCard);
            }
        }
        

    }


}