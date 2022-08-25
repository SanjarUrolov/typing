import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: { value: "regex" },
  reducers: {},
});

export const { aaa } = textSlice.actions;

export default textSlice.reducer;
