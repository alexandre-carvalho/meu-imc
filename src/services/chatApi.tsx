

export async function calculateImc(weight: number, height: number) {
    const calculate = weight / (height * height);
    console.log('weight', weight);
    console.log('height', height);
    console.log('calculateImc', calculate.toFixed(2));
}