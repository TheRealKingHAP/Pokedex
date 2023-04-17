import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';
import viewReducer from '../features/view/viewSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    view: viewReducer
  },
});
