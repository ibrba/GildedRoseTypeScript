import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('Quality should not be negative', function() {
        const item = new Item('foo', 2, 0);
        item.updateQuality();
        expect(item.quality).to.equal(0);
    });

});
