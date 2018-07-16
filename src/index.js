export class ValidationError {
    constructor(message,value,field){
        this.message = message;
        this.value = value;
        this.field = field;
    }
}

export class MultipleValidationError {
    constructor(errors){
        this.error = errors;
    }
}

export const pipe = (...validators) => {

    return (value) => {
        let errors = [];
        for(let validator of validators){
            try{
                validator(value);
            }
            catch( error) {
                errors.push(error)
            }
        }
        if(error.length > 0){
            throw new MultipleValidationError(errors)
        }
        return true;
    }
}

export const shallPass = () => {
    return true;
}