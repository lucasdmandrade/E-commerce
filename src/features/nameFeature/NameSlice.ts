import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NameState {
  value: string;
  status: "idle" | "loading" | "failed";
}

const initialState: NameState = {
  value: "",
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const nameSlice = createSlice({
  name: "name",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { setName } = nameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectName = (state: RootState) => state.name.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default nameSlice.reducer;
