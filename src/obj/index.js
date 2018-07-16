import { pipe } from '../index';

export const build = (pattern) => {
    let validators = [];
    for(let key in pattern){
        let validator = pattern[key];
        validators.push( (value) => validator(value[key]) )
    }
    return pipe(...validators);
}