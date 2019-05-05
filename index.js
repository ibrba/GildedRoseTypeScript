var gilded_rose_1 = require('./app/gilded-rose');
var AgedBrie_1 = require('./app/items/AgedBrie');
var Sulfuras_1 = require('./app/items/Sulfuras');
var BackstagePass_1 = require('./app/items/BackstagePass');
var Conjured_1 = require('./app/items/Conjured');
var items = [
    new gilded_rose_1.Item("+5 Dexterity Vest", 10, 20),
    new AgedBrie_1.AgedBrie(2, 0),
    new gilded_rose_1.Item("Elixir of the Mongoose", 5, 7),
    new Sulfuras_1.Sulfuras(0, 80),
    new Sulfuras_1.Sulfuras(-1, 80),
    new BackstagePass_1.BackstagePass(15, 20),
    new BackstagePass_1.BackstagePass(10, 49),
    new BackstagePass_1.BackstagePass(5, 49),
    new Conjured_1.Conjured(3, 6)];
var gildedRose = new gilded_rose_1.GildedRose(items);
var maxDays = items.reduce(function (value, item) { return value > item.sellIn ? value : item.sellIn; }, 0);
for (var i = 0; i < maxDays; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name | sellIn   |  quality");
    items.forEach(function (element) {
        console.log(element.name + '  |  ' + element.sellIn + '  |  ' + element.quality);
    });
    console.log();
    gildedRose.updateQuality();
}
