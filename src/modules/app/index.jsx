import React from 'react';
import { Counter } from 'src/modules/counter';

import styles from './index.module.css';

export default () => {
  return (
    <div className={styles.container}>
      <p>App</p>
      <Counter />
    </div>
  );
};
