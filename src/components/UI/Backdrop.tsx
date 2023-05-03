import { createPortal } from 'react-dom';

import styles from './Backdrop.module.css';

interface Props {
  onClick?: () => void;
}

const Backdrop = (props: Props) => {
  return createPortal(
    <div className={styles.backdrop} onClick={props.onClick}></div>,
    document.getElementById('backdrop') as HTMLElement
  );
};

export default Backdrop;
