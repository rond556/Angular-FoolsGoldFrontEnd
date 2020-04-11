
export class Card{
    skillPointValue: number;
    type:String;
    name:String;
    imageUrl: String;
    cap:number;

    constructor(){
        this.skillPointValue = 0;
        this.name = "";
        this.imageUrl = "";
        this.type = "";
        this.cap = 0;
    }

    getSkillPointValue(){
        return this.skillPointValue;
    }

    getName(){
        return this.name;
    }

    getType(){
        return this.type;
    }

    getImageUrl(){
        return this.imageUrl;
    }

    getCap(){
        return this.getCap;
    }
}