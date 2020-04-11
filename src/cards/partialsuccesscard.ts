import { Card } from './cardparent';

export class PartialSuccessCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 0;
        this.name = "Partial Success Card";
        this.imageUrl = "";
        this.type = "Partial Success"
        this.cap = 16;
    }
}