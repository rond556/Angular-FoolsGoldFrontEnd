
export class Card{
    skillPointValue: number;
    type:String;
    name:String;
    imageUrl: String;
    cap:number;

    constructor(skillPointValue: number, name: string, imageUrl: String, type: String, cap: number){
        this.skillPointValue = skillPointValue;
        this.name = name;
        this.imageUrl = "https://github.com/rond556/Angular-FoolsGoldFrontEnd/blob/master/src/assets/cardimages/" + imageUrl + ".jpg?raw=true";
        this.type = type;
        this.cap = cap;
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