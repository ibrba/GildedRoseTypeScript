import { expect } from 'chai';
import { Item } from '../../app/gilded-rose';
import { AgedBrie } from '../../app/items/AgedBrie';

describe('Aged Brie', function () {
    it('"Aged Brie" Quality should increase', function() {
        const item = new AgedBrie(2, 5) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(6);
    });

    it('Quality of "Aged Brie" item should stay at 50', function() {
        const item = new AgedBrie( 2, 50) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(50);
    });
});