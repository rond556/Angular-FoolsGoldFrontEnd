import { Card } from './cardparent';

export class GoldSuccessCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 8;
        this.name = "Gold Success Card";
        this.imageUrl = "";
        this.type = "Gold Success"
        this.cap = 1;
    }
}