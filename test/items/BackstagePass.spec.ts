import { expect } from 'chai';
import { Item } from '../../app/gilded-rose';
import { BackstagePass } from '../../app/items/BackstagePass';

describe('Backstage', function () {

    it('"Backstage passes" should increase in Quality', function() {
        const item =  new BackstagePass(14, 45) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(46);
    });

    it('"Backstage passes" should increase in Quality by 2', function() {
        const item =  new BackstagePass(9, 45) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(47);
    });

    it('"Backstage passes" should increase in Quality by 3', function() {
        const item =  new BackstagePass(4, 45) as Item;
        item.updateQuality();
        expect(item.quality).to.equal(48);
    });

});