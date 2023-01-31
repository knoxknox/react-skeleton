import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/modules/counter/reducer';

const reducers = { counter: counterReducer };
export default () => configureStore({ reducer: reducers });
