import { Item, GildedRose } from './app/gilded-rose';
import { AgedBrie } from './app/items/AgedBrie';
import { Sulfuras } from './app/items/Sulfuras';
import { BackstagePass } from './app/items/BackstagePass';
import { Conjured } from './app/items/Conjured';

const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new AgedBrie(2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Sulfuras(0, 80), //
    new Sulfuras(-1, 80),
    new BackstagePass(15, 20),
    new BackstagePass(10, 49),
    new BackstagePass(5, 49),
    new Conjured(3, 6)];


const gildedRose = new GildedRose(items);
var maxDays = items.reduce(( value, item) =>  value > item.sellIn ? value : item.sellIn, 0);
for (let i = 0; i < maxDays; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name | sellIn   |  quality");
    items.forEach(element => {
        console.log(element.name + '  |  ' + element.sellIn + '  |  ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}