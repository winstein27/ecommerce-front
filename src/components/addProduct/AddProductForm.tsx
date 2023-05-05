import { useState } from "react";

import styles from "./AddProductForm.module.css";

import useInput from "../../hooks/useInput";

const AddProductForm = () => {
  const sku = useInput((sku) => sku.trim().length > 0);
  const name = useInput((name) => name.trim().length > 0);
  const price = useInput((price) => Number.parseFloat(price.trim()) > 0);
  const size = useInput((size) => Number.parseFloat(size.trim()) > 0);
  const height = useInput((height) => Number.parseFloat(height.trim()) > 0);
  const width = useInput((width) => Number.parseFloat(width.trim()) > 0);
  const length = useInput((length) => Number.parseFloat(length.trim()) > 0);
  const weight = useInput((weight) => Number.parseFloat(weight.trim()) > 0);

  const [type, setType] = useState("");

  return (
    <form action="POST" id="#product_form" className={styles.form}>
      <label htmlFor="sku">SKU</label>
      <input type="text" name="sku" id="#sku" />

      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="#name" />

      <label htmlFor="price">Price ($)</label>
      <input type="number" name="price" id="#price" />

      <label htmlFor="type">Type Switcher</label>
      <select
        name="type"
        id="#productType"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option value="">Type Switcher</option>
        <option value="dvd" id="#DVD">
          DVD
        </option>
        <option value="book">Book</option>
        <option value="forniture">Forniture</option>
      </select>

      {type === "dvd" && (
        <>
          <label htmlFor="size">Size (MB)</label>
          <input type="number" name="size" id="#size" />
        </>
      )}
      {type === "forniture" && (
        <>
          <label htmlFor="height">Height (CM)</label>
          <input type="number" name="height" id="#height" />

          <label htmlFor="width">Width (CM)</label>
          <input type="number" name="width" id="#width" />

          <label htmlFor="length">Length (CM)</label>
          <input type="number" name="length" id="#length" />
        </>
      )}

      {type === "book" && (
        <>
          <label htmlFor="weight">Weight (KG)</label>
          <input type="number" name="weight" id="#weight" />
        </>
      )}
    </form>
  );
};

export default AddProductForm;
