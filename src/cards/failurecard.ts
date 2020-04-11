import { Card } from './cardparent';

export class FailureCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 0;
        this.name = "Failure Card";
        this.imageUrl = "";
        this.type = "Failure"
        this.cap = 6;
    }
}