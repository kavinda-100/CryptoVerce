import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "@/features/api/CoinApi";
import { coinNews } from "@/features/api/CoinNews";

export const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
    [coinNews.reducerPath]: coinNews.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinApi.middleware)
      .concat(coinNews.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
