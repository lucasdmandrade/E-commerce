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

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export const selectName = (state: RootState) => state.name.value;

export default nameSlice.reducer;
