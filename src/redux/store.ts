import {
  type PayloadAction,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [] as any[],
  },
  reducers: {
    updatePosts: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { updatePosts } = postSlice.actions;

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
