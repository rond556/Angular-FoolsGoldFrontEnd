import { Card } from './cardparent';

export class MindFaceCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 4;
        this.name = "Mind/Face Card";
        this.imageUrl = "";
        this.type = "Dual Attribute"
        this.cap = 4;
    }
    
}