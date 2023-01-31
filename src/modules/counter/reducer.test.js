import reducer, { actions as types } from './reducer';

describe('counter reducer', () => {
  const state = {
    value: 0,
    status: 'idle'
  };

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      ...state
    });
  });

  it('should handle counter/incrementSync', () => {
    expect(
      reducer(state, {
        payload: 15,
        type: types.incrementSync.toString()
      })
    ).toEqual({
      ...state,
      value: 16,
      status: 'idle'
    });
  });

  it('should handle counter/decrementSync', () => {
    expect(
      reducer(state, {
        payload: 15,
        type: types.decrementSync.toString()
      })
    ).toEqual({
      ...state,
      value: 14,
      status: 'idle'
    });
  });

  it('should handle counter/onAsyncAction', () => {
    expect(
      reducer(state, {
        type: types.onAsyncAction.toString()
      })
    ).toEqual({
      ...state,
      status: 'loading'
    });
  });

  it('should handle counter/incrementAsync', () => {
    expect(
      reducer(state, {
        payload: 15,
        type: types.incrementAsync.toString()
      })
    ).toEqual({
      ...state,
      value: 15,
      status: 'fulfilled'
    });
  });

  it('should handle counter/decrementAsync', () => {
    expect(
      reducer(state, {
        payload: 15,
        type: types.decrementAsync.toString()
      })
    ).toEqual({
      ...state,
      value: 15,
      status: 'fulfilled'
    });
  });
});
