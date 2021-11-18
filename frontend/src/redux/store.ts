import { configureStore } from '@reduxjs/toolkit';
import { roomApiSlice } from './reducers/rooms';
import userReducer from './reducers/user';
import gameReducer from './reducers/game';

export const store = configureStore({
  reducer: {
    [roomApiSlice.reducerPath]: roomApiSlice.reducer,
    user: userReducer,
    game: gameReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(roomApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
