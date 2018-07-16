import { startsWith } from '../src/string/index';
import { endsWith } from '../src/string/index';
import { build } from '../src/obj/index';
import { pipe } from '../src/index';
import { expect } from 'chai';

describe("#obj", () => {
    it("build",()=>{
        it('should return true when it is ok',()=>{
            const nameValidator = pipe(startsWith('123'),endsWith('456'));
            const ageValidator = startsWith('1');
            const validator = build({'name':nameValidator,'age':ageValidator});
            expect(validator({'name':'123456','age':'111'}),true);
        })
    })
});