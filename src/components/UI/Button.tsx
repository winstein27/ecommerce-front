import React from 'react';

import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: Props) => {
  return (
    <button className={styles.button} type={props?.type || 'button'}>
      {props.children}
    </button>
  );
};

export default Button;
