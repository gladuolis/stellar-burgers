import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
<<<<<<< HEAD
import { rootReducer } from './reducers';
=======

const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
