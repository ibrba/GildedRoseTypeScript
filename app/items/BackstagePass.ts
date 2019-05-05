import { Item } from "../gilded-rose";
const INCREASE_POINT_BY2 = 10;
const INCREASE_POINT_BY3 = 5;

export class BackstagePass extends Item {

    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }
    updateQuality() {
        this.updateSellIn();
        if (this.sellIn <= INCREASE_POINT_BY3) {
            this.increaseQuality(3);
            return;
        }
        if (this.sellIn <= INCREASE_POINT_BY2) {
            this.increaseQuality(2);
            return;
        }
        this.increaseQuality();
    }
}