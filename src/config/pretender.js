import Pretender from 'pretender';
import { increment, decrement } from '../features/counter/pretender';

export default () => {
  const server = new Pretender(increment, decrement);

  server.handledRequest = (verb, path, request) => {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};
