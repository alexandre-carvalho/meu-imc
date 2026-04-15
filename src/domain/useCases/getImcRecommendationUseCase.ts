import { IChatRepository } from "domain/repositories/chatRepository";

export function makeGetImcRecommendation(chatRepository: IChatRepository) {
  return function getImcRecommendation(
    imcValue: number,
    classification: string,
  ): Promise<string> {
    return chatRepository.getRecommendation(imcValue, classification);
  };
}
