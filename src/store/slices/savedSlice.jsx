import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleToSaved(state, { payload: item }) {
      const isExists = state.some((i) => i.id === item.id);
      if (isExists) {
        const index = state.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(item);
    },
  },
});

export const { actions, reducer } = savedSlice;
