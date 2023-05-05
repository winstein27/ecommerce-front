import Button from '../UI/Button';
import Header from '../UI/Header';

import styles from './ProductsHeader.module.css';

const menu = (
  <>
    <li className={styles.menuItem}>
      <a href="#" className={styles.link}>
        ADD
      </a>
    </li>
    <li className={styles.menuItem}>
      <Button type="button" variant='error'>MASS DELETE</Button>
    </li>
  </>
);

const ProductsHeader = () => {
  return <Header title="Product list" menuItems={menu} />;
};

export default ProductsHeader;
