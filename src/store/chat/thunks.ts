import { Dispatch } from "redux";
import { sendChat } from "services/chat";
import {
  chatDefaultFailure,
  chatDefaultLoad,
  chatDefaultSucces,
  chatSetIsSuccessMessage,
} from "./index";

export function handleChatAsync(imc: number, classification: string) {
  return async (dispatch: Dispatch) => {
    dispatch(chatDefaultLoad());
    const response = await sendChat(imc, classification);

    if (!response.success || !response.data) {
      dispatch(chatDefaultFailure("Não foi possível realizar a solicitação"));
      return;
    }

    dispatch(chatDefaultSucces(response.data.choices[0].message.content));
    dispatch(chatSetIsSuccessMessage(true));
  };
}
