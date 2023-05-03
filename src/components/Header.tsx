import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import useScreen from '../hooks/useScreen';

import Button from './UI/Button';
import Backdrop from './UI/Backdrop';

import styles from './Header.module.css';

const menu = (
  <ul className={styles.navbar}>
    <li className={styles.menuItem}>
      <a href="#" className={styles.link}>
        ADD
      </a>
    </li>
    <li className={styles.menuItem}>
      <Button type="button">MASS DELETE</Button>
    </li>
  </ul>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobileScreen } = useScreen();

  useEffect(() => {
    if (!isMobileScreen) {
      setIsMenuOpen(false);
    }
  }, [isMobileScreen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Product List</h2>
      <nav>
        {!isMenuOpen && isMobileScreen && (
          <MdMenu size="2rem" onClick={() => setIsMenuOpen(true)} />
        )}
        {isMenuOpen && (
          <>
            <Backdrop onClick={closeMenu} />
            {createPortal(
              <div className={styles.mobileMenu}>
                <MdClose
                  size="2rem"
                  className={styles.closeButton}
                  onClick={closeMenu}
                />
                {menu}
              </div>,
              document.getElementById('overlay') as HTMLElement
            )}
          </>
        )}
        {!isMobileScreen && menu}
      </nav>
    </header>
  );
};

export default Header;
