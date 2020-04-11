import { Card } from './cardparent';

export class BodyCard extends Card{
    constructor(){
        super();
        this.skillPointValue = 2;
        this.name = "Body Card";
        this.imageUrl = "";
        this.type = "Basic Attribute"
        this.cap = 2;
    }
}