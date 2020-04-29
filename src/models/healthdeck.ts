import { HealthCard } from './healthdeckcards.ts/healthcardparent';
import { BodyHealthCard } from './healthdeckcards.ts/bodyhealthcard';
import { MindHealthCard } from './healthdeckcards.ts/mindhealthcard';
import { FaceHealthCard } from './healthdeckcards.ts/facehealthcard';
import { BronzeHealthCard } from './healthdeckcards.ts/bronzehealthcard';

export class HealthDeck{
    cards: Array<HealthCard>;
    bodyCard: BodyHealthCard;
    mindCard: MindHealthCard
    faceCard: FaceHealthCard;
    bronzeCard: BronzeHealthCard;

    constructor(){
        this.bodyCard = new BodyHealthCard;
        this.mindCard = new MindHealthCard;
        this.faceCard = new FaceHealthCard;
        this.bronzeCard = new BronzeHealthCard;
        this.cards = new Array<HealthCard>();
        for(let i = 0; i < 2; i++){
            this.cards.push(this.bodyCard)
        }
        for(let i = 0; i < 2; i++){
            this.cards.push(this.mindCard)
        }
        for(let i = 0; i < 2; i++){
            this.cards.push(this.faceCard)
        }
        for(let i = 0; i < 4; i++){
            this.cards.push(this.bronzeCard)
        }
    }

    getCards(){
        return this.cards;
    }

}