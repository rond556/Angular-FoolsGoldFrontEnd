import { Card } from './cardparent';

export class SilverSuccessCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 4;
        this.name = "Silver Success Card";
        this.imageUrl = "";
        this.type = "Silver Success"
        this.cap = 3;
    }
}