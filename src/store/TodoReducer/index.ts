import axios from "axios";

import {
  // AsyncThunk,
  createAsyncThunk,
  createSlice,
  // Slice,
} from "@reduxjs/toolkit";

export const getList = createAsyncThunk("getList", async () => {
  const response = await axios.get("http://localhost:8000/list");
  return response.data;
});

export const addList = createAsyncThunk("addList", async (newList: any) => {
  console.log({ newList }, "89089080");
  const response = await axios.post("http://localhost:8000/list", newList);
  return response.data;
});

export type TodoState = {
  loading: "idle" | "pending";
  error: undefined | unknown;
  list: any;
};

const initialState: TodoState = {
  loading: "idle",
  error: undefined,
  list: [],
};

export const todoReducer = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.list = payload;
    });
    builder.addCase(getList.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });

    builder.addCase(addList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      // state.list = state.list.concat(payload); // 직접 로컬에서 추가하는방법
    });
    builder.addCase(addList.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

export default todoReducer.reducer;
