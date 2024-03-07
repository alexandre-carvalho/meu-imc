

export async function calculateImc(weight: string, height: string) {
    const parseWeight = parseFloat(weight);
    const parseHeight = parseFloat(height);

    const calculate = parseWeight / (parseHeight * parseHeight);
    console.log('weight', parseWeight);
    console.log('height', parseHeight);
    console.log('calculateImc', parseFloat(calculate.toFixed(2)));
}