export interface IChatRepository {
  getRecommendation(imcValue: number, classification: string): Promise<string>;
}
