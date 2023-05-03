import Button from './UI/Button';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Product List</h2>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
