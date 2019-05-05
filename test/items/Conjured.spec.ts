import { expect } from 'chai';
import { Item } from '../../app/gilded-rose';
import { Conjured } from '../../app/items/Conjured';

describe('Conjured', function () {
    it('"Conjured" Quality should increase twice fast', function() {
        const item = new Conjured(5, 20) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(18);
    });
});