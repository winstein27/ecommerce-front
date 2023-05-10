import { useForm } from "react-hook-form";

import styles from "./AddProductForm.module.css";

import useInput from "../../hooks/useInput";

import Product from "../../types/Product";

interface Props {
  onProductAdd: (product: Product) => void;
}

const AddProductForm = ({ onProductAdd }: Props) => {
  const {
    value: sku,
    valueTouched: skuTouched,
    valueHasError: skuHasError,
    valueChangedHandler: skuChangedHandler,
    valueBlurHandler: skuBlurHandler,
  } = useInput((sku) => sku.trim().length < 1);
  const {
    value: name,
    valueTouched: nameTouched,
    valueHasError: nameHasError,
    valueChangedHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput((name) => name.trim().length < 1);
  const {
    value: price,
    valueTouched: priceTouched,
    valueHasError: priceHasError,
    valueChangedHandler: priceChangedHandler,
    valueBlurHandler: priceBlurHandler,
  } = useInput(
    (price) => price.trim().length <= 0 || Number.parseFloat(price.trim()) <= 0
  );
  const {
    value: type,
    valueTouched: typeTouched,
    valueHasError: typeHasError,
    valueChangedHandler: typeChangedHandler,
    valueBlurHandler: typeBlurHandler,
  } = useInput(
    (type) => type !== "dvd" && type !== "book" && type !== "furniture"
  );
  const {
    value: size,
    valueTouched: sizeTouched,
    valueHasError: sizeHasError,
    valueChangedHandler: sizeChangedHandler,
    valueBlurHandler: sizeBlurHandler,
  } = useInput(
    (size) => size.trim().length <= 0 || Number.parseFloat(size.trim()) <= 0
  );
  const {
    value: height,
    valueTouched: heightTouched,
    valueHasError: heightHasError,
    valueChangedHandler: heightChangedHandler,
    valueBlurHandler: heightBlurHandler,
  } = useInput(
    (height) =>
      height.trim().length <= 0 || Number.parseFloat(height.trim()) <= 0
  );
  const {
    value: width,
    valueTouched: widthTouched,
    valueHasError: widthHasError,
    valueChangedHandler: widthChangedHandler,
    valueBlurHandler: widthBlurHandler,
  } = useInput(
    (width) => width.trim().length <= 0 || Number.parseFloat(width.trim()) <= 0
  );
  const {
    value: length,
    valueTouched: lengthTouched,
    valueHasError: lengthHasError,
    valueChangedHandler: lengthChangedHandler,
    valueBlurHandler: lengthBlurHandler,
  } = useInput(
    (length) =>
      length.trim().length <= 0 || Number.parseFloat(length.trim()) <= 0
  );
  const {
    value: weight,
    valueTouched: weightTouched,
    valueHasError: weightHasError,
    valueChangedHandler: weightChangedHandler,
    valueBlurHandler: weightBlurHandler,
  } = useInput(
    (weight) =>
      weight.trim().length <= 0 || Number.parseFloat(weight.trim()) <= 0
  );

  const { handleSubmit } = useForm();

  const formIsValid =
    !skuHasError &&
    !nameHasError &&
    !priceHasError &&
    type !== "" &&
    ((type === "dvd" && !sizeHasError) ||
      (type === "book" && !weightHasError) ||
      (type === "furniture" &&
        !heightHasError &&
        !widthHasError &&
        !lengthHasError));

  const onSubmitHandler = () => {
    skuBlurHandler();
    nameBlurHandler();
    priceBlurHandler();
    typeBlurHandler();
    sizeBlurHandler();
    weightBlurHandler();
    heightBlurHandler();
    widthBlurHandler();
    lengthBlurHandler();

    if (formIsValid) {
      onProductAdd({
        id: 0,
        sku,
        name,
        price: Number.parseFloat(price),
        type,
        size: size ? Number.parseFloat(size) : undefined,
        weight: weight ? Number.parseFloat(weight) : undefined,
        height: height ? Number.parseFloat(height) : undefined,
        width: width ? Number.parseFloat(width) : undefined,
        length: length ? Number.parseFloat(length) : undefined,
      });
    }
  };

  return (
    <form
      action="POST"
      id="product_form"
      className={styles.form}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <label htmlFor="sku">SKU</label>
      <input
        type="text"
        name="sku"
        id="#sku"
        value={sku}
        onChange={skuChangedHandler}
        onBlur={skuBlurHandler}
        className={skuTouched && skuHasError ? styles.invalid : ""}
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="#name"
        value={name}
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        className={nameTouched && nameHasError ? styles.invalid : ""}
      />

      <label htmlFor="price">Price ($)</label>
      <input
        type="number"
        name="price"
        id="#price"
        value={price}
        onChange={priceChangedHandler}
        onBlur={priceBlurHandler}
        className={priceTouched && priceHasError ? styles.invalid : ""}
      />

      <label htmlFor="type">Type Switcher</label>
      <select
        name="type"
        id="#productType"
        value={type}
        onChange={typeChangedHandler}
        onBlur={typeBlurHandler}
        className={typeTouched && typeHasError ? styles.invalid : ""}
      >
        <option value="">Type Switcher</option>
        <option value="dvd" id="#DVD">
          DVD
        </option>
        <option value="book">Book</option>
        <option value="furniture">Furniture</option>
      </select>

      {type === "dvd" && (
        <>
          <label htmlFor="size">Size (MB)</label>
          <input
            type="number"
            name="size"
            id="#size"
            value={size}
            onChange={sizeChangedHandler}
            onBlur={sizeBlurHandler}
            className={sizeTouched && sizeHasError ? styles.invalid : ""}
          />
        </>
      )}
      {type === "furniture" && (
        <>
          <label htmlFor="height">Height (CM)</label>
          <input
            type="number"
            name="height"
            id="#height"
            value={height}
            onChange={heightChangedHandler}
            onBlur={heightBlurHandler}
            className={heightTouched && heightHasError ? styles.invalid : ""}
          />

          <label htmlFor="width">Width (CM)</label>
          <input
            type="number"
            name="width"
            id="#width"
            value={width}
            onChange={widthChangedHandler}
            onBlur={widthBlurHandler}
            className={widthTouched && widthHasError ? styles.invalid : ""}
          />

          <label htmlFor="length">Length (CM)</label>
          <input
            type="number"
            name="length"
            id="#length"
            value={length}
            onChange={lengthChangedHandler}
            onBlur={lengthBlurHandler}
            className={lengthTouched && lengthHasError ? styles.invalid : ""}
          />
        </>
      )}

      {type === "book" && (
        <>
          <label htmlFor="weight">Weight (KG)</label>
          <input
            type="number"
            name="weight"
            id="#weight"
            value={weight}
            onChange={weightChangedHandler}
            onBlur={weightBlurHandler}
            className={weightTouched && weightHasError ? styles.invalid : ""}
          />
        </>
      )}
    </form>
  );
};

export default AddProductForm;
