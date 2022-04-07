import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    mode: "light",
  },

  reducers: {
    modeRed(state: any, action: any) {
      void { ...state, mode: (state.mode = action.payload) };
    },
  },
});

export const { modeRed } = todoSlice.actions;
export default todoSlice.reducer;
