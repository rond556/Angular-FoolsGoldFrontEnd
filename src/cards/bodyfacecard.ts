import { Card } from './cardparent';

export class BodyFaceCard extends Card{
    
    constructor(){
        super();
        this.skillPointValue = 4;
        this.name = "Body/Face Card";
        this.imageUrl = "";
        this.type = "Dual Attribute";
        this.cap = 4;
    }
    
}