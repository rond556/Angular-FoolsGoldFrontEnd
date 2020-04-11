import { Card } from './cardparent';

export class MindCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 2;
        this.name = "Mind Card";
        this.imageUrl = "";
        this.type = "Basic Attribute"
        this.cap = 8;
    }
}