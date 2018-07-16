import { startsWith } from '../src/string/index';
import { endsWith } from '../src/string/index';
import { pipe } from '../src/index';
import { expect } from 'chai';

describe("#string", () => {
    it("startsWith",()=>{
        it("should return true when ok", () => {
            expect(startsWith('123')('123456'),true);
        })    
    })
    it("endsWith",()=>{
        it("should return true when ok", () => {
            expect(endsWith('456')('123456'),true);
        })
    })
    it("pipe",() => {
        it("should return true when ok",() =>{
            expect(pipe(
                endsWith('456'),
                startsWith('123')
            )('123456'),true);
        })
    })
});