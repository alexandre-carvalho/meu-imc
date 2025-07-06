import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ChatState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly messageError?: string;
  readonly messageSuccess?: string;
  readonly isSuccessMessage?: boolean;
}

const initialState: ChatState = {
  loading: false,
  error: false,
  isSuccessMessage: false,
};

const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatDefaultLoad: (state) => {
      state.loading = true;
      state.error = false;
    },
    chatDefaultSucces: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = false;
      state.messageSuccess = action.payload;
    },
    chatDefaultFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = true;
      state.messageError = action.payload;
    },
    chatSetIsSuccessMessage: (state, action: PayloadAction<boolean>) => {
      state.isSuccessMessage = action.payload;
    },
  },
});

export const {
  chatDefaultLoad,
  chatDefaultSucces,
  chatDefaultFailure,
  chatSetIsSuccessMessage,
} = chat.actions;
export default chat.reducer;
