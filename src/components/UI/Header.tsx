import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import useScreen from '../../hooks/useScreen';

import Backdrop from './Backdrop';

import styles from './Header.module.css';

interface Props {
  title: string;
  menuItems: React.ReactNode;
}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobileScreen } = useScreen();

  useEffect(() => {
    if (!isMobileScreen) {
      setIsMenuOpen(false);
    }
  }, [isMobileScreen]);

  const menu = <ul className={styles.navbar}>{props.menuItems}</ul>;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{props.title}</h2>
      <nav>
        {!isMenuOpen && isMobileScreen && (
          <MdMenu
            size="2rem"
            onClick={() => setIsMenuOpen(true)}
            className={styles.menuButton}
          />
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
