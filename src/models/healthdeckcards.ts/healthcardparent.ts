export class HealthCard{
    cardName: String;
    index: number;
    imageUrl: String;

    constructor(name: string, imageUrl: String, index: number){
        this.cardName = name;
        this.imageUrl = "https://github.com/rond556/Angular-FoolsGoldFrontEnd/blob/master/src/assets/healthdeckcardimages/" + imageUrl +".jpg?raw=true";
        this.index = index;
    }

    getName(){
        return this.cardName;
    }

    setName(name:String){
        this.cardName = name;
    }

    setIndex(index: number){
        this.index = index;
    }

    getIndex(){
        return this.index;
    }

    setImageUrl(url:String){
        this.imageUrl = url;
    }

    getImageUrl(){
        return this.imageUrl;
    }
}