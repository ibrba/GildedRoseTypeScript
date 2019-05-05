import { expect } from 'chai';
import { Item } from '../../app/gilded-rose';
import { Sulfuras } from '../../app/items/Sulfuras';

it(' "Sulfuras" sellIn et Quality properties should should not change', function() {
    const item = new Sulfuras(-1, 80) as Item;
    item.updateQuality();
    expect(item.sellIn).to.equal(-1);
    expect(item.quality).to.equal(80);
});