import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/totalValueCounter/CounterSlice";
import nameReducer from "../features/nameFeature/NameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
