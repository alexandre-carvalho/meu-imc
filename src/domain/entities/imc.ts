export enum ImcType {
  Underweight = 1,
  NormalWeight = 2,
  Overweight = 3,
  ObesityGrade1 = 4,
  ObesityGrade2 = 5,
  ObesityGrade3 = 6,
}

export interface ImcRange {
  min?: number;
  max?: number;
  type: ImcType;
  classification: string;
  details: string;
}

export interface ImcResult {
  value: number;
  type: ImcType;
  classification: string;
  details: string;
}
