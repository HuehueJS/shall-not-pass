import { shallPass } from '../src/index';
import { expect } from 'chai';

describe("#ShallPass", () => {
    it("should return when call it", () => {
        expect(shallPass()).to.be.equal(true);
    })
});