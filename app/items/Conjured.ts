import { Item } from "../gilded-rose";

export class Conjured extends Item {

    constructor(sellIn, quality) {
        super('Conjured Mana Cake', sellIn, quality);
    }
    updateQuality() {
        this.updateSellIn();
        this.decreaseQuality(2);
    }
}