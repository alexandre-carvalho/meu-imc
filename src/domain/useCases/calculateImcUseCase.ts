import { imcRanges } from "domain/data/imcRanges";
import { ImcResult } from "domain/entities/imc";

export function calculateImc(weightKg: number, heightM: number): ImcResult {
  if (weightKg > 0 && heightM > 0) {
    const calculate = weightKg / (heightM * heightM);

    const imcData = imcRanges.find((range) => {
      const minCondition = range.min ? calculate >= range.min : true;
      const maxCondition = range.max ? calculate <= range.max : true;
      return minCondition && maxCondition;
    });

    if (imcData) {
      const result: ImcResult = {
        value: parseFloat(calculate.toFixed(2)),
        type: imcData.type,
        classification: imcData.classification,
        details: imcData.details,
      };
      return result;
    }

    throw new Error("IMC range not found for the calculated value.");
  } else {
    throw new Error("Weight and height must be greater than zero.");
  }
}
