import { createSlice } from "@reduxjs/toolkit";
type State = {
  hello: string;
};

const initialState: State = {
  hello: "Hellow World",
};

const slice = createSlice({
  name: "demo_slice",
  initialState,
  reducers: {},
});

//This are the things we need reducer and actions
export const reducer = slice.reducer;
//TODO: add thunks here
export const actions = { ...slice.actions };
