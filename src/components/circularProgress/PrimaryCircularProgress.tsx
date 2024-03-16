import React from 'react';
import styles from '../../styles/circularProgress.module.css';

const CircularProgressAnimation: React.FC = () => {
  return (
    <div className={styles.circularProgressContainer}>
      <div className={styles.circularProgress}></div>
    </div>
  );
};

export default CircularProgressAnimation;
