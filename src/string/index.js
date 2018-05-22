import ValidationError from '../index';

export const startsWith = (substring, message,field) => {

    return ( value ) => {
        if(value.startsWith(substring)){
            return true;
        }
        throw new ValidationError(message,value,field);
    }

}

export const endsWith = (substring,message,field) => {
    return (value) => {
        if(value.endsWith(substring)){
            return true;
        }
        throw new ValidationError(message,value,field);
    }
}