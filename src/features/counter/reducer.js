import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle'
};

const slice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    incrementSync: (state, { payload }) => ({
      ...state,
      value: payload + 1
    }),
    decrementSync: (state, { payload }) => ({
      ...state,
      value: payload - 1
    }),

    onAsyncAction: (state, { payload }) => ({
      ...state,
      status: 'loading'
    }),
    incrementAsync: (state, { payload }) => ({
      ...state,
      value: payload,
      status: 'fulfilled'
    }),
    decrementAsync: (state, { payload }) => ({
      ...state,
      value: payload,
      status: 'fulfilled'
    })
  }
});

export default slice.reducer;
export const { actions } = slice;
