import { Card } from './cardparent';

export class BronzeSuccessCard extends Card{
    constructor(){
        super();
        this.skillPointValue = 2;
        this.name = "Bronze Success Card";
        this.imageUrl = "";
        this.type = "Bronze Success"
        this.cap = 16;
    }
}