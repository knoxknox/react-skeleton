import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/reducer';

const reducers = { counter: counterReducer };
export default () => configureStore({ reducer: reducers });
