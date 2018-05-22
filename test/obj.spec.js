import { startsWith } from '../src/string/index';
import { endsWith } from '../src/string/index';
import { build } from '../src/obj/index';
import { pipe } from '../src/index';
import { expect } from 'chai';

describe("#obj", () => {
    it("build",()=>{
        it('should return true when it is ok',()=>{
            const validator = build({'name':pipe(startsWith('123'),endsWith('456')),'age':pipe(startsWith('1'))});
            expect(validator({'name':'123456','age':'111'}),true);
        })
    })
});