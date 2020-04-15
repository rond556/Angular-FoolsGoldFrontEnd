import { Money } from './moneymodels/moneyparent';
import { BodyFaceCardMoney } from './moneymodels/bodyfacecardmoney';
import { BodyCardMoney } from './moneymodels/bodycardmoney';
import { BronzeSuccessCardMoney } from './moneymodels/bronzesuccesscardmoney';
import { FaceCardMoney } from './moneymodels/facecard';
import { FailureCardMoney } from './moneymodels/failurecardmoney';
import { GoldSuccessCardMoney } from './moneymodels/goldsuccesscardmoney';
import { MindCardMoney } from './moneymodels/mindcard';
import { MindBodyFaceCardMoney } from './moneymodels/mindbodyfacecardmoney';
import { PartialSuccessCardMoney } from './moneymodels/partialsuccesscardmoney';
import { SilverSuccessCardMoney } from './moneymodels/silversuccesscardmoney';
import { BodyMindCardMoney } from './moneymodels/bodymindcardmoney';
import { FaceMindCardMoney } from './moneymodels/mindfacecardmoney';

export class Coins{
    coins:Array<Money>;

    constructor(){
        this.coins = new Array<Money>();
        this.coins.push(new BodyCardMoney);
        this.coins.push(new MindCardMoney);
        this.coins.push(new FaceCardMoney);
        this.coins.push(new BodyFaceCardMoney);
        this.coins.push(new BodyMindCardMoney);
        this.coins.push(new FaceMindCardMoney);
        this.coins.push(new MindBodyFaceCardMoney);
        this.coins.push(new BronzeSuccessCardMoney);
        this.coins.push(new PartialSuccessCardMoney);
        this.coins.push(new SilverSuccessCardMoney);
        this.coins.push(new GoldSuccessCardMoney);
        this.coins.push(new FailureCardMoney);
    }
    
    getCoins(){
        return this.coins;
    }
}