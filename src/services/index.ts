import { Store } from "@reduxjs/toolkit";
import { ApplicationState } from "store";

// StoreService
let store: Store<ApplicationState>;
export const getStore = (): Store<ApplicationState> => store;
export function injectStore(storeToInject: Store<ApplicationState>) {
  store = storeToInject;
}
