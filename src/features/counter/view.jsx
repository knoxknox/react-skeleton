import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from './actions';
import styles from './view.module.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store.counter.value);
  const status = useSelector(store => store.counter.status);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.value}>Sync</span>

        <button className={styles.button} onClick={() => dispatch(actions.decrementSync(count))}>-</button>
        <button className={styles.button} onClick={() => dispatch(actions.incrementSync(count))}>+</button>
      </div>

      <div className={styles.row}>
        <span className={styles.value}>Async</span>

        <button className={styles.button} disabled={status === 'loading'} onClick={() => dispatch(actions.decrementAsync(count))}>-</button>
        <button className={styles.button} disabled={status === 'loading'} onClick={() => dispatch(actions.incrementAsync(count))}>+</button>
      </div>
    </div>
  );
};
