import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/features/counter/reducer';

const reducers = { counter: counterReducer };
export default () => configureStore({ reducer: reducers });
