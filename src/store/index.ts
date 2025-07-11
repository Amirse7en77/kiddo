import { configureStore } from '@reduxjs/toolkit';
import darsyarReducer from './../slice/darsyarSlice'

export const store = configureStore({
  reducer: {
    darsyar:darsyarReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;