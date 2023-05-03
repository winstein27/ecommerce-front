import Header from '../UI/Header';
import Button from '../UI/Button';

import styles from './NewProductHeader.module.css';

const menu = (
  <>
    <li className={styles.menuItem}>
      <Button>Save</Button>
    </li>
    <li className={styles.menuItem}>
      <Button type="button">Cancel</Button>
    </li>
  </>
);

const NewProductHeader = () => {
  return <Header title="Product Add" menuItems={menu} />;
};

export default NewProductHeader;
