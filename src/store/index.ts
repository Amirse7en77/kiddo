import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import darsyarReducer from './../slice/darsyarSlice';
import konjkavReducer from './../slice/konjkavSlice';

export const store = configureStore({
  reducer: {
    darsyar: darsyarReducer,
    konjkav: konjkavReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();