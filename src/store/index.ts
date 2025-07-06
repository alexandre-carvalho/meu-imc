import { configureStore } from "@reduxjs/toolkit";
import { injectStore } from "services";
import chat from "./chat";

export const store = configureStore({
  reducer: {
    chat,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

injectStore(store);
