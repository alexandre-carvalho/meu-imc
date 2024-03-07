export const maskWeight = (value: any) => {

    value = value.replace(/[^\d]/g, '');

    if (value.length < 4) {
        // Mask ex: 99.9
        value = value.replace(/^(\d{1,2})(\d{1})$/, '$1.$2');
    }
    else if (value.length === 4) {
        // Mask ex: 99.99
        value = value.replace(/^(\d{2,})(\d{2})$/, '$1.$2');
    }
    else
        // Mask ex: 100.00
        value = value.replace(/^(\d{3,})(\d{2})$/, '$1.$2');

    return value;
};

export const maskHeight = (value: any) => {
    // Mask ex: 9.99
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{1,2})(\d{2})$/, '$1.$2');
};