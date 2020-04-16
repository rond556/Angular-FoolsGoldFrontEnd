export class Money{
    name:String;
    imageURL:String;

    constructor(name:String, imageURL:String){
        this.name = name;
        this.imageURL = "https://github.com/rond556/Angular-FoolsGoldFrontEnd/blob/master/src/assets/cardmoney/" + imageURL + ".png?raw=true";
    }
    
    getName(){
        return this.name;
    }

    getImageURL(){
        return this.imageURL;
    }
}