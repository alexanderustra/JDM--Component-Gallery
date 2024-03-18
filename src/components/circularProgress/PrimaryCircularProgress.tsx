import React from 'react';
import styles from '../../styles/circularProgress.module.css';

interface Props {
  color?: string
  label?: string
}
const CircularProgressAnimation: React.FC<Props> = ({ label, color }: Props) => {
  const progressStyle = {
      borderTopColor: color
  };

  let content = null;
  if (label) {
      content = <p className={styles.label}>{label}</p>;
  }

  return (
      <div className={styles.circularProgressContainer}>
          <div className={styles.circularProgress} style={progressStyle}></div>
          {content}
      </div>
  );
};


export default CircularProgressAnimation;
