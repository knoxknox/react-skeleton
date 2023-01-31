import * as mock from './mock';

const headers = { 'Content-Type': 'application/json' };

const incrementMock = ({ counter }) => JSON.stringify(mock.increment(counter));
const decrementMock = ({ counter }) => JSON.stringify(mock.decrement(counter));

export function increment() {
  this.get('/increment', request => [200, headers, incrementMock(request.queryParams)], 500);
}

export function decrement() {
  this.get('/decrement', request => [200, headers, decrementMock(request.queryParams)], 500);
}
