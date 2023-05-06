import styles from "./Card.module.css";

import Product from "../../types/Product";

interface Props {
  product: Product;
  addOrRemoveFromList: (product: Product) => void;
}

const Card = (props: Props) => {
  const prod = props.product;

  const onCheckHandler = (product: Product) => {
    props.addOrRemoveFromList(product);
  };

  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        className={`.delete-checkbox ${styles.checkbox}`}
        onChange={() => onCheckHandler(prod)}
      />
      <p>{prod.sku}</p>
      <p>{prod.name}</p>
      <p>{prod.price.toFixed(2)} $</p>
      <p>
        {prod.type === "book" && `Weight: ${prod.weight}KG`}
        {prod.type === "dvd" && `Size: ${prod.size} MB`}
        {prod.type === "furniture" &&
          `Dimension: ${prod.height}x${prod.width}x${prod.length}`}
      </p>
    </div>
  );
};

export default Card;
