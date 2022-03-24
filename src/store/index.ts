import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { booksApi } from '../services/books';
import { charactersApi } from '../services/characters';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [booksApi.reducerPath]: booksApi.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware, charactersApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
