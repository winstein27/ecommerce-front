import ProductsHeader from '../components/products/ProductsHeader';
import ProductsList from '../components/products/ProductsList';

import products from '../types/DummyProducts';

import styles from './Products.module.css';

const Products = () => {
  return (
    <>
      <ProductsHeader />
      <main className={styles.main}>
        <ProductsList products={products} />
      </main>
    </>
  );
};

export default Products;
