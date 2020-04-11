import { Card } from './cardparent';

export class BodyMindCard extends Card{
    constructor(){
        super();
        this.skillPointValue = 4;
        this.name = "Body/Mind Card";
        this.imageUrl = "";
        this.type = "Dual Attribute"
        this.cap = 4;
    }
    
}