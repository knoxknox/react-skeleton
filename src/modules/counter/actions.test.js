import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as api from './api';
import * as actions from './actions';
import { actions as types } from './reducer';

jest.mock('./api.js');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('counter actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('incrementSync success action', () => {
    const counter = 42;
    const store = mockStore({});

    const expectedActions = [
      { type: types.incrementSync.toString(), payload: counter }
    ];

    const result = store.dispatch(actions.incrementSync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('decrementSync success action', () => {
    const counter = 42;
    const store = mockStore({});

    const expectedActions = [
      { type: types.decrementSync.toString(), payload: counter }
    ];

    const result = store.dispatch(actions.decrementSync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('incrementAsync success action', () => {
    const counter = 42;
    const store = mockStore({});
    const response = { counter: counter + 1 };
    api.increment.mockResolvedValue({ data: response });

    const expectedActions = [
      { type: types.onAsyncAction.toString() },
      { type: types.incrementAsync.toString(), payload: counter + 1 }
    ];

    const result = store.dispatch(actions.incrementAsync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('incrementAsync failure action', () => {
    const counter = 42;
    const store = mockStore({});
    const response = { error: '400 Bad Request' };
    api.increment.mockRejectedValue({ data: response });

    const expectedActions = [
      { type: types.onAsyncAction.toString() },
      { type: types.incrementAsync.toString(), payload: counter }
    ];

    const result = store.dispatch(actions.incrementAsync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('decrementAsync success action', () => {
    const counter = 42;
    const store = mockStore({});
    const response = { counter: counter - 1 };
    api.decrement.mockResolvedValue({ data: response });

    const expectedActions = [
      { type: types.onAsyncAction.toString() },
      { type: types.decrementAsync.toString(), payload: counter - 1 }
    ];

    const result = store.dispatch(actions.decrementAsync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('decrementAsync failure action', () => {
    const counter = 42;
    const store = mockStore({});
    const response = { error: '400 Bad Request' };
    api.decrement.mockRejectedValue({ data: response });

    const expectedActions = [
      { type: types.onAsyncAction.toString() },
      { type: types.decrementAsync.toString(), payload: counter }
    ];

    const result = store.dispatch(actions.decrementAsync(counter));
    return result.then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
