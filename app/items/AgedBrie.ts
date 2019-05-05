import { Item } from "../gilded-rose";

export class AgedBrie extends Item {

    constructor(sellIn, quality) {
        super('Aged Brie', sellIn, quality);
    }
    updateQuality() {
        this.updateSellIn();
        this.increaseQuality();
    }
}
