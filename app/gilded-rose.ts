export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    updateQuality() {
        this.updateSellIn();
        this.decreaseQuality();
    }
    
    increaseQuality(step=1) {
        this.quality = (this.quality + step <= MAX_QUALITY) ? this.quality + step : MAX_QUALITY;
    }

    decreaseQuality(step=1) {
            this.quality = (this.quality - step >= MIN_QUALITY) ? this.quality - step : MIN_QUALITY;
    }

    updateSellIn(){
        this.sellIn--;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let updatedItems = this.items.map(item => { item.updateQuality();
                                                    return item;
                                                  });
        return updatedItems;
    }
}
