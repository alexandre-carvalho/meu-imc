export interface ImcRange {
  min?: number;
  max?: number;
  type: number;
  classification: string;
  details: string;
}

export const imcRanges: ImcRange[] = [
  {
    max: 18.4,
    type: 1,
    classification: "Abaixo do peso",
    details:
      "Indica que a pessoa está abaixo do peso ideal, o que pode estar associado a problemas nutricionais ou de saúde.",
  },
  {
    min: 18.5,
    max: 24.9,
    type: 2,
    classification: "Peso normal",
    details:
      "Considerado o peso ideal para a maioria das pessoas, com menor risco para problemas de saúde relacionados ao peso.",
  },
  {
    min: 25.0,
    max: 29.9,
    type: 3,
    classification: "Sobrepeso",
    details:
      "Indica excesso de peso, o que pode aumentar o risco de doenças como hipertensão e diabetes.",
  },
  {
    min: 30.0,
    max: 34.9,
    type: 4,
    classification: "Obesidade grau 1",
    details: "Risco moderado para problemas de saúde.",
  },
  {
    min: 35.0,
    max: 39.9,
    type: 4,
    classification: "Obesidade grau 2",
    details: "Risco elevado para complicações de saúde.",
  },
  {
    min: 40.0,
    type: 4,
    classification: "Obesidade grau 3 - obesidade mórbida",
    details: "Risco muito elevado de problemas graves de saúde.",
  },
];
