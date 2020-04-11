import { Card } from './cardparent';

export class BodyMindFaceCard extends Card{
    constructor(){
        super();
        this.skillPointValue = 6;
        this.name = "Body/Mind/Face Card";
        this.imageUrl = "";
        this.type = "Triple Attribute";
        this.cap = 2;
    }
    
}