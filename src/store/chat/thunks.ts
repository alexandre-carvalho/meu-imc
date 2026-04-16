import { Dispatch } from "redux";
import {
  chatDefaultFailure,
  chatDefaultLoad,
  chatDefaultSucces,
  chatSetIsSuccessMessage,
} from "./index";

import { makeGetImcRecommendation } from "domain/useCases/getImcRecommendationUseCase";
import { openAIChatRepository } from "infrastructure/repositories/openAIChatRepository";

const getImcRecommendation = makeGetImcRecommendation(openAIChatRepository);

export function handleChatAsync(imc: number, classification: string) {
  return async (dispatch: Dispatch) => {
    dispatch(chatDefaultLoad());

    try {
      const response = await getImcRecommendation(imc, classification);

      dispatch(chatDefaultSucces(response));
      dispatch(chatSetIsSuccessMessage(true));
    } catch (error: any) {
      dispatch(chatDefaultFailure(error.message));
    }
  };
}
