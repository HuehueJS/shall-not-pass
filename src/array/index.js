const forAll = (validator) => {

    return (value) => {
        value.forEach(validator);
    }

}