export class Money{
    name:String;
    imageURL:String;

    constructor(name:String, imageURL:String){
        this.name = name;
        this.imageURL = imageURL;
    }

    getName(){
        return this.name;
    }

    getImageURL(){
        return this.imageURL;
    }
}