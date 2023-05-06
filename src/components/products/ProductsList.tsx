import Product from "../../types/Product";

import Card from "../UI/Card";

import styles from "./ProductsList.module.css";

interface Props {
  products: Product[];
}

const ProductsList = (props: Props) => {
  return (
    <ul className={styles.productsList}>
      {props.products.map((product, index) => (
        <li key={index}>
          <Card product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
