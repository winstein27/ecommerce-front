import Product from "../../types/Product";

import Card from "../UI/Card";

import styles from "./ProductsList.module.css";

interface Props {
  products: Product[];
  addOrRemoveFromList: (product: Product) => void;
}

const ProductsList = (props: Props) => {
  return (
    <ul className={styles.productsList}>
      {props.products.map((product, index) => (
        <li key={index}>
          <Card
            product={product}
            addOrRemoveFromList={props.addOrRemoveFromList}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
