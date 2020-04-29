import { HealthCard } from './healthcardparent';

export class BronzeHealthCard extends HealthCard{
    constructor(){
        super("Bronze Card", "Bronze_Success", 3);
    }
}