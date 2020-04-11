import { Card } from './cardparent';

export class FaceCard extends Card{

    constructor(){
        super();
        this.skillPointValue = 2;
        this.name = "Face Card";
        this.imageUrl = "";
        this.type = "Basic Attribute"
        this.cap = 8;
    }
}