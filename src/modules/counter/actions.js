import * as api from './api';
import { actions } from './reducer';

export const incrementSync = (counter) => {
  return async (dispatch) => {
    dispatch(actions.incrementSync(counter));
  };
};

export const decrementSync = (counter) => {
  return async (dispatch) => {
    dispatch(actions.decrementSync(counter));
  };
};

export const incrementAsync = (counter) => {
  return async (dispatch) => {
    try {
      dispatch(actions.onAsyncAction());
      const response = await api.increment(counter);
      dispatch(actions.incrementAsync(response.data.counter));
    } catch (error) {
      dispatch(actions.incrementAsync(counter)); // original counter
    }
  };
};

export const decrementAsync = (counter) => {
  return async (dispatch) => {
    try {
      dispatch(actions.onAsyncAction());
      const response = await api.decrement(counter);
      dispatch(actions.decrementAsync(response.data.counter));
    } catch (error) {
      dispatch(actions.decrementAsync(counter)); // original counter
    }
  };
};
