import axios from "axios";

import {
  // AsyncThunk,
  createAction,
  createAsyncThunk,
  createSlice,
  // Slice,
} from "@reduxjs/toolkit";

// export const minusCount = createAction("minusCount");

// export const plusCount = createAction("plusCount");

export type TodoState = {
  loading: "idle" | "pending";
  error: undefined | unknown;
  number: number;
};

const initialState: TodoState = {
  loading: "idle",
  error: undefined,
  number: 0,
};

export const countReducer = createSlice({
  name: "count",
  initialState,
  reducers: {
    minusCount: (state) => {
      state.number = state.number - 1;
    },
    plusCount: (state) => {
      state.number = state.number + 1;
    },
  },
});

export const { minusCount, plusCount } = countReducer.actions;

export default countReducer.reducer;
